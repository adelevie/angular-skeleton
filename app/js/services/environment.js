'use strict';

skeletonApp.service('Environment', ['$location', function($location) {

  var hostname = $location.host();

  if (hostname.match(/staging\./i)) {
    this.code = 'staging';
  } else if (hostname.match(/www\./i)) {
    this.code = 'production'
  }

  switch (this.code) {
    case 'staging':
      this.logThreshold = 'DEBUG';
      break;
    case 'production':
      this.logThreshold = 'ERROR';
      break;
    default:
      this.logThreshold = 'ALL';
      break;
  }

  this.currentUrl = function() {
    return $location.protocol() + '://' + $location.host();
  };

  this.logUrl = this.currentUrl() + '/log';

}]);
