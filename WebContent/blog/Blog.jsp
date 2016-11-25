<!-- <!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript"  src="../resources/angular.min.js"></script>
</head>
<body data-ng-app="myApp">
	<h1>Blog</h1>
	<div  data-ng-controller="Blog">
	<form role="form"  action="" data-ng-submit="submit()">
		Title: <input type="text" data-ng-model="title"> <br>
		Userid: <input type="text" data-ng-model="userid"> <br>
	
		 Blog Description
		<textarea draggable="false" rows="10" data-ng-model="content"></textarea>
			<button type="submit">Save Blog</button>
	</form>
	<input type="text" data-ng-model="search" placeholder="search blog">
<div data-ng-init="getAllBlogs()">
	 <div data-ng-repeat="blog in blogs | filter:search">
	<span data-ng-bind="blog.title"></span>
	{{blog.content}}
	<button data-ng-click="editblog(blog.id)">edit</button>
		<button data-ng-click="deleteblog(blog.id)">delete</button>
	</div> 
	</div>
	</div>

		<script type="text/javascript" src="blog.js"></script>
</body>
</html> -->