import "../css/login.css";
import user_icon from "../pics/logo/person.png";
import email_icon from "../pics/logo/email.png";
import password_icon from "../pics/logo/password.png";
import React from 'react';
import {useState} from "react";
//import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import EmployeeService from '../services/EmployeeService';

function Login() {
  
   
    const [email, setEmail] = useState("");
    const [employeename, setEmployeename] = useState("");
    const [password, setPassword] = useState("");
    //const navigate = useNavigate();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
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

    async function backToRegister(){
          history.push('/register');
      }

    //changing color of text while typing dynamically
    const inputColorStyle = {
      color: 'black',
      fontWeight: 'bold'
    };
    
    async function loginUser(event) {
            event.preventDefault();

            if (validateForm()) {
            try {
                EmployeeService.loginEmployee({
                employeename:employeename,
                email: email,
                password: password,
                }).then((res) => 
                {
                 console.log(res.data);
                 
                 if (res.data.message === "Email not exits") 
                 {
                   alert("Email not exits");
                 } 
                 else if(res.data.message === "Login Success")
                 { 
                    
                   // navigate('/home');
                   history.push('/employees');
                 } 
                  else 
                 { 
                    alert("Incorrect Email and Password not match");
                 }
              }, fail => {
               console.error(fail); // Error!
            });
            }
     
             catch (err) {
              alert(err);
            }
            }
          }

      return (
        <div className="container-login">
              <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
              </div>

              <div className="inputs">
                {/* <div className="input">
                  <img src={user_icon} alt="" ></img>
                  <input type="text" placeholder="Name"></input>
                </div> */}
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
                <div className="submit" onClick={loginUser} >Login</div>
                <div className="submit" onClick={backToRegister} >Sign Up</div>       
              </div>
              </div>
          )
  }
  
  export default Login;