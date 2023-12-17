import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    uploadEmployee(formData) {
        const uploadUrl = `${EMPLOYEE_API_BASE_URL}/upload`;
        return axios.post(uploadUrl, formData);
    }

    registerEmployee(employeeData) {
        const registerUrl = `${EMPLOYEE_API_BASE_URL}/register`;
        return axios.post(registerUrl, employeeData);
    }

    loginEmployee(employeeData) {
        const registerUrl = `${EMPLOYEE_API_BASE_URL}/login`;
        return axios.post(registerUrl, employeeData);
    }

}

export default new EmployeeService()