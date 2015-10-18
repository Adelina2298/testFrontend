'use strict';

angular.module('link2App')
	.directive('programsSelector', function (){
		return {
			scope: {
				allprograms: '=',
				programs: '='
			},			
			restrict: 'AE',
			templateUrl: 'views/programs_selector.html',
			link: function (scope, element, attrs) {

	    		scope.filterSelected = true;

			    // Search for programs
		  		scope.querySearch = function(query) {
			      var results = query ?
			          scope.allprograms.filter(createFilterFor(query)) : [];
			      return results;
			    };

			    // Create filter function for a query string
			    function createFilterFor(query) {
			      var lowercaseQuery = angular.lowercase(query);
			      return function filterFn(programs) {
			        return (programs.name.toLowerCase().indexOf(lowercaseQuery) != -1);
			      };
			    };

			     scope.addProgram = function(program) {
			    	scope.programs.push(program);
			    };

			}
		}
	});