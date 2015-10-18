'use strict';

angular.module('link2App')
  .factory('Programs', function($http, $base64, $q) {
  	return {
  		getPageNo: function(){
  			return $http.get('https://api.2performant.com/affiliate/campaigns.json',
  				 	  {headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
  		},
  		getAll: function(allpages){
  			return $http.get('https://api.2performant.com/affiliate/campaigns.json',
  				 	  {params: {perpage: allpages},
  				 	   headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
		}
  		// getPage: function(page){
  		// 	var promise = $http.get('https://api.2performant.com/affiliate/campaigns.json',
  		// 							{params: {page: page},
  		// 		 					headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
  		// 	var defer = $q.defer();
  		// 	promise.then(
  		// 		function(data){
  		// 			defer.resolve(data);
  		// 		},
  		// 		function(reason){
  		// 			defer.reject(reason.error);
  		// 		}
  		// 	);

  		// 	return defer.promise;

  		// }
  	};
 });	