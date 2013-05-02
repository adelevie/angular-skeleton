App.provider('DeferredRequestService', function() {
  var buffer = [];

  /**
   * Required by HTTP interceptor.
   * Function is attached to provider to be invisible for regular users of this service.
   */
  this.pushToBuffer = function(config, deferred) {
    buffer.push({
      config: config,
      deferred: deferred
    });
  }

  this.$get = ['$rootScope', '$injector', function($rootScope, $injector) {
    var $http, retry = function(config, deferred) {
      $http = $http || $injector.get('$http');
      $http(config).then(function(response) {
        deferred.resolve(response);
      });
    }, retryAll = function() {
      for (var i = 0; i < buffer.length; ++i) {
        retry(buffer[i].config, buffer[i].deferred);
      }
      buffer = [];
    };
    return {
      loginConfirmed: function() {
        $rootScope.$broadcast('loginConfirmed');
        retryAll();
      }
    }
  }]
});

App.config(function($httpProvider, authServiceProvider) {
  // Intercept 401 Unauthorized responses. Triggers event and defers requests
  // until user is authorized. Based on http-auth-interceptor by Witold Szczerba.
  var authInterceptor = ['$rootScope', '$q', function($rootScope, $q) {
    var onSuccess = function(response) {
      return response;
    }
    var onError = function(response) {
      if (response.status === 401 && response.config.url !== LOGIN_URL) {
        var deferred = $q.defer();
        authServiceProvider.pushToBuffer(response.config, deferred);
        $rootScope.$broadcast(EVENT_LOGIN_REQUIRED);
        return deferred.promise;
      }
      return $q.reject(response);
    }
    return function(promise) {
      return promise.then(onSuccess, onError);
    }
  }];
  $httpProvider.responseInterceptors.push(authInterceptor);
});