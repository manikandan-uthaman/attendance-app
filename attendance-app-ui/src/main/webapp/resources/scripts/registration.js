var isEmailValid = false;
$(document).ready(function(){
	
	$(".name").on('blur', function(){
		nameValidation();
	});
	
	$(".email").on('blur', function(){
		emailValidation();
	});
	
	$(".phone").on('blur', function(){
		phoneValidation();
	});
	
	$(".password").on('blur', function(){
		pwdValidation();
	});
	
	$(".confirmpassword").on('blur', function(){
		confirmPwdValidation();
	});
	
	$(".register").on('click', function(e){
		var isValid = nameValidation();
		isValid = isEmailValid && isValid;
		isValid = phoneValidation() && isValid;
		isValid = pwdValidation() && isValid;
		isValid = confirmPwdValidation() && isValid;
		if(!isValid){
			e.preventDefault();
		}
	});
	
});

var nameValidation = function(){
	let name = $(".name").val();
	if((name == undefined) || (name == "")){
		$(".name").addClass("is-invalid");
		$(".name-error").show();
		return false;
	}else{
		$(".name").removeClass("is-invalid");
		$(".name-error").hide();
		return true;
	}
}

var emailValidation = function(){
	let email = $(".email").val();
	if((email == undefined) || (email == "")){
		isEmailValid = false;
		$(".email").addClass("is-invalid");
		$(".email-error").show();
		return false;
	}else{
		var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		if(!pattern.test(email)){
			isEmailValid = false;
			$(".email").addClass("is-invalid");
			$(".email-format-error").show();
			return false;
		}else{						
			$.ajax({
				url: "/attendanceApp/registration/validateEmail?email="+email,
				success: function(data){
					if(data == "false"){
						isEmailValid = false;
						$(".email").addClass("is-invalid");
						$(".email-exists-error").show();
						return false;
					}else if(data == "true"){
						isEmailValid = true;
						$(".email").removeClass("is-invalid");
						$(".email-exists-error").hide();
						return true;
					}
				},
				error: function(data){
					isEmailValid = false;
					$(".email").addClass("is-invalid");
					$(".email-exists-error").show();
					return false;					
				}
			});
			
			$(".email").removeClass("is-invalid");
			$(".email-error").hide();
			return true;
		}
	}
}

var phoneValidation = function(){
	let phone = $(".phone").val();
	if((phone == undefined) || (phone == "")){
		$(".phone").addClass("is-invalid");
		$(".phone-error").show();
		return false;
	}else{
		$(".phone").removeClass("is-invalid");
		$(".phone-error").hide();
		return true;
	}
}

var pwdValidation = function(){
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

var confirmPwdValidation = function(){
	let cpwd = $(".confirmpassword").val();
	let pwd = $(".password").val();
	if(cpwd != pwd){
		$(".confirmpassword").addClass("is-invalid");
		$(".confirm-password-error").show();
		return false;
	}else{
		$(".confirmpassword").removeClass("is-invalid");
		$(".confirm-password-error").hide();
		return true;
	}
}

