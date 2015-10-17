'use strict';

angular.module('link2App')
  .controller('Link2Ctrl', ('$scope', 'Programs', function ($scope, Programs) {

  		$scope.allprograms = [];
	    $scope.programs = [];
	    $scope.filterSelected = true;

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
	    }

  		$scope.loadPrograms = function() {
			Programs.getAll()
				.success(function(data){
                    $scope.allprograms = data.campaigns;
                })
                .error(function(){
                    alert('There has been an error. Please try again later!');
                });
	    }

	    $scope.loadPrograms();
  }));
