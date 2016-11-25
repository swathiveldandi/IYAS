
	
	var app = angular.module('myApp',[]);
	app.controller('Forum', [ '$scope', '$http', function($scope, $http) {
		var BASE_URL = 'http://localhost:8083/CollabBackEnd';


		$scope.getAllForums= function() {
			console.log("get all forums")
			$http({
				method : 'GET',
				url : BASE_URL+'/getAllForums'
			}).success(function(data, status, headers, config) {
				$scope.forums=data;
				//alert(data); 
			}).error(function(data, status, headers, config) {
				alert("Error");
			});
		};
		$scope.submit = function() {
			console.log("CreateForum")
			
			$scope.forum = {	
			fid       : $scope.forumid,
			forumname : $scope.forumname,
			forumdesc : $scope.forumdesc,
			}
			$http({
				method : 'POST',
				url : BASE_URL + '/CreateForum',
				data : $scope.forum
			}).success(function(data, status, headers, config) {
				$scope.forumid ='';
				$scope.forumname = '';
				$scope.forumdesc = '';
				$scope.getAllForums();
			}).error(function(data,status,headers,config){
				alert("error");
			});
		};
		$scope.deleteForum=function(fid){
			$http({
				method:'DELETE',
			url:BASE_URL+'/deleteForum/'+fid
			}).success(function(data,status,headers,config){
				$scope.getAllForums();
			})
		};
		$scope.editForum = function(fid,forumname,forumdesc) {
			
			$scope.fid = fid;
			$scope.forumname = forumname;
			$scope.forumdesc = forumdesc;
		
	}
			
	}]);
	
		  
