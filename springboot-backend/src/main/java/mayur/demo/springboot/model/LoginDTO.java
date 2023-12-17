package mayur.demo.springboot.model;

public class LoginDTO {
	
		private String email;
		private String employeename;
		private String password;
		
		public LoginDTO() {
		}
		
		public LoginDTO(String email, String password) {
			this.email = email;
			this.password = password;
		}
		
		public LoginDTO(String email, String password,String employeename) {
		this.employeename=employeename;
		this.email = email;
		this.password = password;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

//		public String getEmployeename() {
//			return employeename;
//		}
//
//		public void setEmployeename(String employeename) {
//			this.employeename = employeename;
//		} 
		
		
		
		
		
		
}
