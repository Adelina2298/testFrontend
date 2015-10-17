'use strict';

angular.module('link2App')
  .factory('Programs', function($http, $base64) {
  	return {
  		getAll: function(){
  			return $http.get('https://api.2performant.com/affiliate/campaigns.json',
  				{headers: {'Authorization': 'Basic '+ $base64.encode('85@2parale.com:123456')}});
  		}
  	};
 });	