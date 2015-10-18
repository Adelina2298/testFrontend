'use strict';

angular.module('link2App')
  .controller('Link2Ctrl', ('$scope', 'Programs', function ($scope, Programs) {

  		$scope.allprograms = [];
	    $scope.programs = [];
	    $scope.include = true;

  		$scope.loadPrograms = function() {
			Programs.getAll()
				.success(function(data){
                    $scope.allprograms = data.campaigns;
                })
                .error(function(){
                    alert('There has been an error. Please try again later!');
                });
	    };

	    $scope.loadPrograms();

	    $scope.convert = function() {
	    	console.clear();
	    	if ($scope.include) {
	    		for (var i = 0; i < $scope.programs.length; i++) {
	    			console.log($scope.programs[i].unique_code);
	    		}
	    	} else {
	    		for (var i = 0; i < $scope.allprograms.length; i++) {
	    			if($scope.programs.indexOf($scope.allprograms[i]) == -1){
	    				console.log($scope.allprograms[i].unique_code);
	    			}
	    		}
	    	}
	    }

	    
  }));
