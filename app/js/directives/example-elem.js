'use strict';

// Directives have camel cased names such as ngBind. The directive can be invoked by
// translating the camel case name into snake case with these special characters :, -, or _.
// However, the '-' notation (e.g. ng-bind) is highly recommended to prevent IE issues.
skeletonApp.directive('exampleElem', [function() {

  return {
    // Don't use 'E', it requires document.createElement() for IE<9
    // Avoid using 'C' or 'M', they use ugly syntax
    restrict: 'A',

    // Always start with an isolate scope and use bindings to pass around information.
    // You should only omit this or set it to true if you know what you're doing. There's
    // usually a better way to achieve your goal rather than using inheritance.
    scope: {},

    // Directive templates belong in /partials
    templateUrl: 'partials/example-elem.html',

    // Don't do any DOM manipulation in your controllers. Use the link function instead.
    link: function(scope, element, attrs) {}
  };

}]);
