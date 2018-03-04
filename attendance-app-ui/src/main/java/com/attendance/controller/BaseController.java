package com.attendance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.attendance.Forms.RegistrationForm;
import com.attendance.Forms.userDetails;
import com.attendance.Service.UtilityService;
import com.attendance.model.UserDetails;

@Controller
public class BaseController {

	@Autowired
	UtilityService utilityServiceImpl;

	// Spring Security see this :
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "newuser", required = false) String newuser,
			@RequestParam(value = "logout", required = false) String logout) {

		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username or password!");
		}

		if (newuser != null) {
			model.addObject("msg", "User registered successfully.");
		}

		if (logout != null) {
			model.addObject("msg", "You've been logged out successfully.");
		}

		model.setViewName("login");

		return model;

	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView adminPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Spring Security Custom Login Form");
		model.addObject("message", "This is protected page!");
		model.setViewName("index");

		return model;

	}

	@RequestMapping(value = "/registration", method = RequestMethod.GET)
	public ModelAndView registrationPage() {

		ModelAndView model = new ModelAndView();
		// model.addObject("userForm", new User());
		model.setViewName("registration");

		return model;

	}

	@RequestMapping(value = "/registration/users", method = RequestMethod.POST)
	public RedirectView addUser(@ModelAttribute RegistrationForm user) {

		utilityServiceImpl.addNewUser(user);
		return new RedirectView("/attendanceApp/login?newuser=newuser");
	}

	@RequestMapping(value = "/registration/validateEmail", method = RequestMethod.GET)
	@ResponseBody
	public String validateEmail(@RequestParam String email) {
		boolean isvalid = utilityServiceImpl.validateEmail(email);
		return String.valueOf(isvalid);
	}
	
	@RequestMapping(value="/getUserDetails", method=RequestMethod.GET)
	@ResponseBody
	public userDetails getUserDetails(){
		userDetails user = new userDetails();
		user.setName("Manikandan");
		user.setEmail("manikandan.mit@outlook.com");
		user.setHasAdminAccess(true);
		return user;
	}
}
