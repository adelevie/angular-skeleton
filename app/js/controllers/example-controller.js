'use strict';

/**
 * Example controller with scope assignment.
 */
skeletonApp.controller('ExampleController', ['$scope', function($scope) {

  $scope.myFn = function() {
    alert('Hi there!');
  };

}]);
