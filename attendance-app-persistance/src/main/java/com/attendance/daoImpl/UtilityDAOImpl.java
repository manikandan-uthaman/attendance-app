package com.attendance.daoImpl;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.attendance.dao.AbstractDao;
import com.attendance.dao.UtilityDAO;

@Component
@Qualifier("utilityDAOImpl")
public class UtilityDAOImpl extends AbstractDao implements UtilityDAO {

	public boolean validateEmail(String email) {
		// TODO Auto-generated method stub
		return false;
	}

	public void deleteUser() {
		Query query = getSession().createSQLQuery("delete from user_roles where user_role_id = :role_id");
		query.setString("role_id", "3");
		query.executeUpdate();
	}

}
