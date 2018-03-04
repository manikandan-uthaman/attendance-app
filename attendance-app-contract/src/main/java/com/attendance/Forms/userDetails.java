package com.attendance.Forms;

public class userDetails {

	private String name;
	
	private String email;
	
	private boolean hasAdminAccess;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public boolean isHasAdminAccess() {
		return hasAdminAccess;
	}
	
	public void setHasAdminAccess(boolean hasAdminAccess) {
		this.hasAdminAccess = hasAdminAccess;
	}
}
