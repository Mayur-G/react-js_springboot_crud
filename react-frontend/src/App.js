import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import PaginationDemo from './components/PaginationDemo';
import FileUploader from './components/FileUploader';
import NextPageComponent from './components/NextPageComponent';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                     <Switch>  
                          <Route path="/register" component= {Register}></Route> 
                           <Route path="/" exact component= {Login}></Route>                       
                          <Route path = "/list" exact component = {ListEmployeeComponent}></Route> 
                          <Route path ="/next" component ={NextPageComponent}></Route>
                          <Route path = "/page" component = {PaginationDemo}></Route> 
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/upload" component = {FileUploader}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
