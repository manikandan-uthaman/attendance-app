<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/styles/bootstrap.min.css" />" />
<script type="text/javascript" src="<c:url value="/resources/scripts/jquery-3.3.1.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/scripts/registration.js" />"></script>
<style>
.registration-card{
	background-color: #ecf0f1;
	margin-top: 10px;
	margin-left: 30px;
	border-radius: 5px;
	padding-top: 20px;
	padding-left: 25px;
}
</style>

</head>
<body style="padding: 30px">
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="border-radius: 4px">
		<div style="overflow: auto; width: 100%;">
			<a class="navbar-brand" href="#">MyAttendance</a> <a
				href="/attendanceApp/login" style="float: right;">
				<button class="btn pull-right" style="float: right;">Login</button>
			</a>
		</div>
	</nav>
	<h2 style="margin: 10px 0px 0px 15px;">Registration..</h2>
	<div class="row">
    <div class="col-md-5 well registration-card">
        <form method="POST" action="/attendanceApp/registration/users" style="padding-bottom: 20px;">
            <fieldset>
                <legend>Personal Details</legend>
                <div class="form-group">
                    <label class="controlLabel" for="name">Name</label>
                    <input class="form-control name" name="name" id="name" type="text">
                    <div class="invalid-feedback name-error" style="display: none">Name is required</div>
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="email">Email</label>
                    <input class="form-control email" name="email" id="email" type="text">
                    <div class="invalid-feedback email-error" style="display: none">Email is required</div>
                    <div class="invalid-feedback email-format-error" style="display: none">Please enter a valid email.</div>
					<div class="invalid-feedback email-exists-error" style="display: none">An User with this email already exists. Please try using different one.</div>
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="phone">Phone</label>
                    <input class="form-control phone" name="phone" id="phone" type="text">
                    <div class="invalid-feedback phone-error" style="display: none">Phone number is required</div>
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="phone">Password</label>
                    <input class="form-control password" name="password" id="password" type="password">
                    <div class="invalid-feedback password-error" style="display: none">Password is required</div>
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="phone">Confirm Password</label>
                    <input class="form-control confirmpassword" name="confirmpassword" id="confirmpassword" type="password">
                    <div class="invalid-feedback confirm-password-error" style="display: none">Password and Confirm Password should match.</div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Address</legend>
                <div class="form-group">
                    <label class="controlLabel" for="street">Address Line 1</label>
                    <input class="form-control" name="addressLine1" id="addressLine1" type="text">
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="suite">Address Line 2</label>
                    <input class="form-control" name="addressLine2" id="addressLine2" type="text">
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="city">City</label>
                    <input class="form-control" name="city" id="city" type="text">
                </div>
                <div class="form-group">
                    <label class="controlLabel" for="zipcode">Zipcode</label>
                    <input class="form-control" name="zipcode" id="zipcode" type="text">
                </div>
            </fieldset>
            <button type="submit" class="btn btn-primary register">Register</button>
            
        </form>
    </div>
</div>
</body>
</html>