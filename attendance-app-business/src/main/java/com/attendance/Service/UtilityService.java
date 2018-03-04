/**
 * 
 */
package com.attendance.Service;

import com.attendance.Forms.RegistrationForm;

/**
 * @author Manikandan
 *
 */
public interface UtilityService {

	public boolean validateEmail(String email);
	
	public void addNewUser(RegistrationForm user);
}
