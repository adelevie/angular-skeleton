'use strict';

skeletonApp.service('Log', [function() {

  var logger = log4javascript.getLogger();
  var layout = new log4javascript.JsonLayout();

  return {
    trace: function(message) { logger.trace(message); },
    debug: function(message) { logger.debug(message); },
    info:  function(message) { logger.info(message); },
    error: function(message) { logger.error(message); },
    fatal: function(message) { logger.fatal(message); },

    init: function(Environment) {
      console.log(Environment);
      var ajaxAppender = new log4javascript.AjaxAppender(Environment.logUrl);

      ajaxAppender.setLayout(layout);
      ajaxAppender.setThreshold(log4javascript.Level[Environment.logThreshold]);

      logger.addAppender(ajaxAppender);
    }
  };

}]);
