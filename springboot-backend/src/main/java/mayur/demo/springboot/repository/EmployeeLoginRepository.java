package mayur.demo.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mayur.demo.springboot.model.EmployeeLogin;

public interface EmployeeLoginRepository  extends JpaRepository<EmployeeLogin, Long>{

	Optional<EmployeeLogin> findOneByEmailAndPassword(String email, String password);
	 
	 EmployeeLogin findByEmail(String email);
}
