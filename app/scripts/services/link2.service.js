'use strict';

angular.module('link2App')
  .factory('Programs', function($http, $base64, $q) {
  	return {
      getQuery: function(query) {
        var defer = $q.defer();
        var promise = $http.get('https://api.2performant.com/affiliate/campaigns.json?filter%5Bquery%5D=' + query,
                         {headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
        promise.then(
           function(data){
             defer.resolve(data.data.campaigns);
           },
           function(reason){
             defer.reject(reason.error);
           }
         );

        return defer.promise;
      },
      getAll: function() {
        return $http.get('https://api.2performant.com/affiliate/campaigns.json?perpage=30',
                         {headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
      }
	  }
  });
