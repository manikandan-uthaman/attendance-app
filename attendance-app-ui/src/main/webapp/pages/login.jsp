<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/styles/bootstrap.min.css" />" />
<script type="text/javascript" src="<c:url value="/resources/scripts/jquery-3.3.1.min.js" />"></script>
<style>
#login-box {
	width: 500px;
	padding: 20px;
	margin: 100px auto;
	background: #fff;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border: 1px solid #2c3e50;
	border-radius: 10px;
	padding: 20px;
}
</style>
</head>
<body style="padding: 30px">
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="border-radius: 4px">
		<div style="overflow: auto; width: 100%;">
			<a class="navbar-brand" href="#">MyAttendance</a> 
			<a href="/attendance-app-ui/registration" style="float: right;">
				<button class="btn pull-right" style="float: right;">Register</button>
			</a>
		</div>
	</nav>
	<div id="login-box">
		<c:if test="${not empty error}">
			<div class="alert alert-dismissible alert-danger">
				${error}
			</div>
		</c:if>
		<c:if test="${not empty msg}">
			<div class="alert alert-dismissible alert-info">
				${msg}
			</div>
		</c:if>
				
		<form method="POST" name='loginForm'
			action="<c:url value='j_spring_security_check' />">
			<div class="form-group">
				<label class="col-sm-2 control-label">Username</label>
				<div class="col-sm-10">
					<input type="text" class="form-control username" name="username" id="name"
						placeholder="Username" />
					<div class="invalid-feedback username-error" style="display: none">Username is required</div>	
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-2 control-label">Password</label>
				<div class="col-sm-10">
					<input type="password" class="form-control password" name="password"
						id="password" placeholder="password" />
					<div class="invalid-feedback password-error" style="display: none">Password is required</div>
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-primary pull-right login">Submit</button>
				</div>
			</div>
		</form>

	</div>
</body>

<script>
$(document).ready(function() {
	$(".username").on('focusout', function(e){
		isUserNameValid();
	});
	
	$(".password").on('focusout', function(e){
		isPasswordValid();
	});
	
	$(".login").on('click', function(e){
		let isValid = isUserNameValid();
		isValid = isPasswordValid() && isValid; 
		if(!isValid){
			e.preventDefault();
		}
	});
});

function isUserNameValid(){
	let username = $(".username").val();
	if((username == undefined) || (username == "")){
		$(".username").addClass("is-invalid");
		$(".username-error").show();
		return false;
	}else{
		$(".username").removeClass("is-invalid");
		$(".username-error").hide();
		return true;
	}
}

function isPasswordValid(){
	let pwd = $(".password").val();
	if((pwd == undefined) || (pwd == "")){
		$(".password").addClass("is-invalid");
		$(".password-error").show();
		return false;
	}else{
		$(".password").removeClass("is-invalid");
		$(".password-error").hide();
		return true;
	}
}
</script>
</html>