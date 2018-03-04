package com.attendance.daoImpl;

import org.dozer.DozerBeanMapper;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.attendance.Forms.RegistrationForm;
import com.attendance.dao.AbstractDao;
import com.attendance.dao.UtilityDAO;
import com.attendance.model.UserDetails;
import com.attendance.model.UserRoles;
import com.attendance.model.Users;

@Component
@Qualifier("utilityDAOImpl")
public class UtilityDAOImpl extends AbstractDao implements UtilityDAO {

	@Autowired
	DozerBeanMapper mapper;

	public boolean validateEmail(String email) {
		Criteria criteria = getSession().createCriteria(Users.class);
		criteria.add(Restrictions.eq("username", email));
		criteria.add(Restrictions.eq("enabled", 1));
		Users user = (Users) criteria.uniqueResult();
		return (user==null);
	}

	public void deleteUser() {
		UserRoles user = new UserRoles();
		user.setUsername("others");
		user.setRole("ROLE_USER");
		getSession().persist(user);
	}

	public void addNewUser(RegistrationForm userForm) {
		
		Users user = mapper.map(userForm, Users.class);
		user.setEnabled(1);
		getSession().persist(user);
		
		UserRoles userRoles = new UserRoles();
		userRoles.setUsername(userForm.getEmail());
		userRoles.setRole("ROLE_USER");
		getSession().persist(userRoles);
		
		UserDetails userDetails = mapper.map(userForm, UserDetails.class);
		getSession().persist(userDetails);
	}

}
