'use strict';

// Model names follow the CapitalizedWords notation but will usually consist
// of only one word. They should be called using the 'new' keyword, e.g.
// var something = new Something();
skeletonApp.factory('Something', [function() {

  // 'Private' property
  var privateProperty = 'Something private';

  // Constructor
  var Something = function(argument) {
    this.privateProperty = argument;
  };

  // Method (getter)
  Something.prototype.getProperty = function() {
    return this.privateProperty;
  };

  return Something;

}]);
