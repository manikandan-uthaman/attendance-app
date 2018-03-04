package com.attendance.dao;

import com.attendance.Forms.RegistrationForm;

public interface UtilityDAO {

	public void deleteUser();
	public boolean validateEmail(String email);
	public void addNewUser(RegistrationForm user);
}
