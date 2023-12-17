import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import user_icon from "../pics/logo/person.png";
import email_icon from "../pics/logo/email.png";
import password_icon from "../pics/logo/password.png";
import EmployeeService from '../services/EmployeeService';

function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [errors, setErrors] = useState({});

    async function backToLogin(){
      history.push('/');
    }

    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      if (!employeename.trim()) {
        newErrors.employeename = "Name is required";
        isValid = false;
      }

      if (!email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      }
  
      if (!password.trim()) {
        newErrors.password = "Password is required";
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };

    //changing color of text while typing dynamically
    const inputColorStyle = {
      color: 'black',
      fontWeight: 'bold'
    };

    async function registerUser(event) {
        event.preventDefault();

        if (validateForm()) {
        try {
          await EmployeeService.registerEmployee({
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }
      }

  
    return (
      <div className="container-login">
      <div className="header">
        <div className="text">Employee Registation</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" ></img>
          <input 
            type="text" 
            placeholder="Name"
            value={employeename}
            onChange={(event) => {
            setEmployeename(event.target.value);
           }}
           style={inputColorStyle}
           />
           {errors.employeename && <div className="error">{errors.employeename}</div>}
        </div>
        <div className="input">
          <img src={email_icon} alt="" ></img>
          <input 
              type="email" 
              placeholder="Email Id"
              value={email}
              onChange={(event) => {
              setEmail(event.target.value);
            }}
            style={inputColorStyle}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input">
          <img src={password_icon} alt="" ></img>
          <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
              setPassword(event.target.value);
            }}
            style={inputColorStyle} 
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>

      <div className="submit-container">
         <button className="submit" style={{ marginRight: '40px' }} onClick={registerUser} >Save</button>
         <button className="submit" onClick={backToLogin} >Back To Login</button>       
      </div>
      </div>
    );
  }
  
  export default Register;