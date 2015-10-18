'use strict';

angular.module('link2App')
  .controller('Link2Ctrl', ('$scope', 'Programs', function ($scope, Programs) {

  		$scope.allprograms = [];
	    $scope.programs = [];
	    $scope.filterSelected = true;
	    $scope.include = true;

	    // Search for programs
  		$scope.querySearch = function(query) {
	      var results = query ?
	          $scope.allprograms.filter(createFilterFor(query)) : [];
	      return results;
	    };

	    // Create filter function for a query string
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query);
	      return function filterFn(programs) {
	        return (programs.name.toLowerCase().indexOf(lowercaseQuery) != -1);
	      };
	    };

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

	    $scope.addProgram = function(program) {
	    	$scope.programs.push(program);
	    }

	    $scope.convert = function() {
	    	if ($scope.include) {
	    		for (var i = 0; i < $scope.programs.length; i++) {
	    			console.log($scope.programs[i].unique_code);
	    		}
	    	} else {
	    		for (var i = 0; i < $scope.allprograms.length; i++) {
	    			console.log("nustcesafac");
	    		}
	    	}
	    }

	    
  }));
