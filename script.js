// Code goes here

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.user1 = {
    name: 'Kikit Pearl',
    address: {
      street: '36, China Town',
      post: 'Kayakoma',
      dist: 'Dingaraha'
    },
    friends: [
      'Sam',
      'Tom',
      'Harry'
    ]

  }
  $scope.user2 = {
    name: 'Vikki Pearl',
    address: {
      street: '36, China Town',
      post: 'Kayakoma',
      dist: 'Dingaraha'
    },
    friends: [
      'Sam',
      'Tom',
      'Harry'
    ]

  }

});

app.directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "EA",
    scope: {
      user: '='
    },
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.knightMe = function(user) {
        user.rank = 'Knight';
      }
      $scope.collapse = function(){
        $scope.collapsed = !$scope.collapsed;
      }
    }
  }
});