'use strict';

angular.module('link2App')
	.directive('programsSelector', function ($timeout, Programs){
		return {
			scope: {
				allprograms: '=',
				programs: '=',
				page: '=',
				loadPrograms: '&'
			},			
			restrict: 'AE',
			templateUrl: 'views/programs_selector.html',
			link: function (scope, element, attrs) {

	    		scope.filterSelected = true;
	    		var pauseMonitor;

			    // Search for programs
		  		// scope.querySearch = function(query) {
		  		// 	if (typeof pauseMonitor !== 'undefined') {
				  //       $timeout.cancel(pauseMonitor); 
				  //   }

			   //   	pauseMonitor = $timeout(function() {
			   //    		Programs.getQuery(query)
			   //    		.then(function(data){
			   //    			return data.data.campaigns;
			   //    		});
			   //   	}, 250);

			   //  };

			    // Search for programs
				scope.querySearch = function(query) {
				    if (typeof pauseMonitor !== 'undefined') {
				        $timeout.cancel(pauseMonitor); 
				    }

				    pauseMonitor = $timeout(function() {
				        return Programs.getQuery(query)
				        .then(function(data){
				            return data.data.campaigns;
				        });
				    }, 0);

				    return pauseMonitor;
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