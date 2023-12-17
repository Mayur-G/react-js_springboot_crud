package mayur.demo.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mayur.demo.springboot.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	 
}
