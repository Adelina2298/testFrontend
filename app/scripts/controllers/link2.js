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
            console.log($scope.programs.length);
    	} else {
    		Programs.getAll()
    		.success(function(data){
    			var allprograms = data.campaigns;
                var flag;
                var m = 0;
    			for (var i = 0; i < allprograms.length; i++) {
                    flag = true;
                    for(var j = 0; j < $scope.programs.length; j++) {
                        if(allprograms[i].name.trim() === $scope.programs[j].name.trim()) {
                            flag = false;
                            break;
                        }
                    }
                    if(flag) {
                        console.log(allprograms[i].unique_code);
                        m++;
                    }
    			}
                console.log(m);
    		})
    		.error(function(data){
    			alert("There has been an error. Please try again later.");
    		})
    	}
    }
   }));
