package mayur.demo.springboot.repository.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import mayur.demo.springboot.config.Helper;
import mayur.demo.springboot.model.Employee;
import mayur.demo.springboot.repository.EmployeeRepository;

@Service
public class EmployeeService {

	    @Autowired
	    private EmployeeRepository employeeRepository;

	    public void save(MultipartFile file) {

	        try {
	            List<Employee> products = Helper.convertExcelToListOfProduct(file.getInputStream());
	            this.employeeRepository.saveAll(products);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }

	    }

	    public List<Employee> getAllProducts() {
	        return this.employeeRepository.findAll();
	    }

	    
}
