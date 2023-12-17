package mayur.demo.springboot.repository.service;

import org.springframework.data.jpa.repository.JpaRepository;

import mayur.demo.springboot.model.Employee;
import mayur.demo.springboot.model.EmployeeDTO;
import mayur.demo.springboot.model.LoginDTO;
import mayur.demo.springboot.model.LoginMessage;
import mayur.demo.springboot.model.EmployeeLogin;

public interface EmployeeLoginService{

	 String addEmployee(EmployeeDTO employeeDTO);
	 LoginMessage loginEmployee(LoginDTO loginDTO);
}
