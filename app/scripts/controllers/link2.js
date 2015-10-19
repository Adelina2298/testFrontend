'use strict';

angular.module('link2App')
  .controller('Link2Ctrl', ('$scope', 'Programs', function ($scope, Programs) {

  		$scope.allprograms = [];
	    $scope.programs = [];
	    $scope.include = true;
	    $scope.page = 1;

	   //  Programs.getPageNo()
	   //  	.success(function(data){
	   //  		$scope.pageNo = data.pagination.results;
	   //  		Programs.getAll($scope.pageNo)
		  //   		.success(function(data){
		  //   			$scope.allprograms = data.campaigns;
		  //   		})
		  //   		.error(function(data){
		  //   			alert('There has been an error. Please try again later!');
		  //   		})
	   //  	})
	   //  	.error(function(){
				// alert('There has been an error. Please try again later!');
	   //  	});

	   	$scope.loadPrograms = function() {
	   		Programs.getPage($scope.page)
	   		.success(function(data) {
	   			$scope.allprograms.push.apply($scope.allprograms, data.campaigns);
	   			$scope.page++;
	   			if(data.pagination.pages < $scope.page) {
	   				$scope.page = -1;
	   			} 
	   		})
	   		.error(function(data){
	   			alert('There has been an error. Please try again later!');
	   		});
	   	}

	   	$scope.loadPrograms();

	  //   $scope.loadPage = function(page) {
	  //   	var promise = Programs.getPage(page);
			// promise.then(
			// 	function(data){
			// 		$scope.allprograms.push.apply($scope.allprograms, data.data.campaigns);
			// 	},
			// 	function(reason){
			// 		alert(reason);
			// 	}
			// );
	  //   };

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
