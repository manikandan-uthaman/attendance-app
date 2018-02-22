package com.attendance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.attendance.Forms.RegistrationForm;
import com.attendance.ServiceImpl.UtilityServiceImpl;

@Controller
public class BaseController {

	@Autowired
	UtilityServiceImpl utilityService;
	
	// Spring Security see this :
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {

		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username or password!");
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
//		model.addObject("userForm", new User());
		model.setViewName("registration");

		return model;

	}
	
	@RequestMapping(value="/users", method=RequestMethod.POST)
	public ModelAndView addUser(@ModelAttribute RegistrationForm user){
		ModelAndView mav = new ModelAndView("registration");
		mav.addObject("message", "User added successfully");

		System.out.println(user.getName());
		System.out.println(user.getEmail());
		
		return mav;
	}

	@RequestMapping(value="/registration/validateEmail", method=RequestMethod.GET)
	@ResponseBody
	public String validateEmail(@RequestParam String email){
		System.out.println(utilityService.validateEmail(null));
		return "valid";
	}
}
