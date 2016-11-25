	
	var app = angular.module('blogApp',[]);
	app.controller('Blog', [ '$scope', '$http', function($scope, $http) {
		var BASE_URL = 'http://localhost:8083/CollabBackEnd';


		$scope.getAllBlogs= function() {
			console.log("get all blogs")
			$http({
				method : 'GET',
				url : BASE_URL+'/getAllBlogs'
			}).success(function(data, status, headers, config) {
				$scope.blogs=data;
				//alert(data); 
			}).error(function(data, status, headers, config) {
				alert("Error");
			});
		};
		$scope.submit = function() {
			console.log("CreateBlog")
			
			$scope.blog = {	
				bid       : $scope.blogid,
				blogname : $scope.blogname,
				blogdesc : $scope.blogdesc,
			}
			$http({
				method : 'POST',
				url : BASE_URL + '/CreateBlog',
				data : $scope.blog
			}).success(function(data, status, headers, config) {
				$scope.blogid ='';
				$scope.blogname = '';
				$scope.blogdesc = '';
				$scope.getAllBlogs();
			}).error(function(data,status,headers,config){
				alert("error");
			});
		};
		$scope.deleteBlog=function(bid){
			$http({
				method:'DELETE',
			url:BASE_URL+'/deleteBlog/'+bid
			}).success(function(data,status,headers,config){
				$scope.getAllBlogs();
			})
		};
		
		$scope.editBlog = function(bid,blogname,blogdesc) {
			
				$scope.bid = bid;
				$scope.blogname = blogname;
				$scope.blogdesc = blogdesc;
			
		}
	
			
	}]);
	
		  