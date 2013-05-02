/**
 * Angular module declaration
 *
 * A module is a collocation of services, directives, filters, and configuration information.
 * This should be the ONLY variable in global scope.
 */
var skeletonApp = angular.module('SkeletonApp', []);

/**
 * Angular module configuration
 *
 * Use this method to register work which needs to be performed on module loading.
 */
skeletonApp.config(['$routeProvider', function($routeProvider) {

  /**
   * Application URL routing
   *
   * Routed templates belong in 'views'.
   */
  $routeProvider.when("/home", {
    controller: 'ExampleController',
    templateUrl: 'views/example.html'
  });

  $routeProvider.otherwise({
    controller: 'ExampleController',
    templateUrl: 'views/example.html'
  });

}]);

/**
 * Angular module initialization
 *
 * Use this method to register work which should be performed when the injector is done loading all modules.
 */
skeletonApp.run(['Environment', 'Log', function(Environment, Log) {

  // Initialize log4javascript
  Log.init(Environment);

}]);
