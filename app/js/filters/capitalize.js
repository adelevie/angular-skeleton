'use strict';

/**
 * Capitalizes a string. Only the first word is capitalized.
 */
skeletonApp.filter('capitalize', [function() {

  return function(input) {
    return input ? input.substring(0,1).toUpperCase() + input.substring(1) : '';
  }

}]);
