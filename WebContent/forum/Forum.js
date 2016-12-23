
	
	var app = angular.module('myApp',[]);
	app.controller('Forum', [ '$scope', '$http','$location','$rootScope', function($scope, $http,$location,$rootScope) {
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
		$scope.editForum=function(fid,forumname,forumdesc){
			$scope.forumid=fid;
			$scope.forumname=forumname;
			$scope.forumdesc=forumdesc;
		}
		$scope.getforum=function(id){
			
			console.log("iforum")
			$http({
				method: "GET",
				url:BASE_URL+'/individualforum/'+id,
			}).success(function(data,status,headers,config){
				$location.path('/individualforum');
				$rootScope.individualforums=data;
				console.log(data)
			}).error(function(data, status, headers, config) {
				alert("Error");
			});
		}
		
		
	}]);
	
		  
