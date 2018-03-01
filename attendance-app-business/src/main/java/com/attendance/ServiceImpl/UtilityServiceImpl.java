/**
 * 
 */
package com.attendance.ServiceImpl;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.attendance.Service.UtilityService;
import com.attendance.dao.UtilityDAO;

/**
 * @author Manikandan
 *
 */

@Component
@Qualifier("utilityServiceImpl")
public class UtilityServiceImpl implements UtilityService {

	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
			Pattern.CASE_INSENSITIVE);

	@Autowired
	private UtilityDAO utilityDAOImpl;

	public boolean validateEmail(String email) {
		boolean isValid;
		Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(email);
		isValid = matcher.find();
		System.out.println("Detect new changes");
		utilityDAOImpl.deleteUser();
		if (isValid) {
			return utilityDAOImpl.validateEmail(email);
		}
		return isValid;
	}

}
