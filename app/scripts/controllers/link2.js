'use strict';

angular.module('link2App')
  .controller('Link2Ctrl', ('$scope', 'Programs', function ($scope, Programs) {
    $scope.programs = [];
    $scope.include = false;

    $scope.filter = function(query) {
  		return Programs.getQuery(query);
  	};

    $scope.convert = function() {
    	console.clear();
    	if ($scope.include) {
    		for (var i = 0; i < $scope.programs.length; i++) {
    			console.log($scope.programs[i].unique_code);
    		}
    	} else {
    		Programs.getAll()
    		.success(function(data){
    			var allprograms = data.campaigns;
    			for (var i = 0; i < allprograms.length; i++) {
    				if($scope.programs.indexOf(allprograms[i]) == -1){
    					console.log(allprograms[i].unique_code);
    				}
    			}
    		})
    		.error(function(data){
    			alert("There has been an error. Please try again later.");
    		})
    	}
    }
   }));
