package mayur.demo.springboot.repository.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import mayur.demo.springboot.model.EmployeeDTO;
import mayur.demo.springboot.model.EmployeeLogin;
import mayur.demo.springboot.model.LoginDTO;
import mayur.demo.springboot.model.LoginMessage;
import mayur.demo.springboot.repository.EmployeeLoginRepository;
import mayur.demo.springboot.repository.service.EmployeeLoginService;

@Service
public class EmployeeLoginServiceImpl implements EmployeeLoginService {

	@Autowired
    private EmployeeLoginRepository employeeLoginRepository;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        EmployeeLogin employee = new EmployeeLogin(
                employeeDTO.getEmployeeid(),
                employeeDTO.getEmployeename(),
                employeeDTO.getEmail(),
               this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        
        employeeLoginRepository.save(employee);
        	
        return employee.getEmployeename();
    }
    
    EmployeeDTO employeeDTO;
    
    @Override
    public LoginMessage  loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        EmployeeLogin employee1 = employeeLoginRepository.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<EmployeeLogin> employee = employeeLoginRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }
    }
}
