import React, { Component } from 'react'
import {useState} from 'react'
import EmployeeService from '../services/EmployeeService'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],

            data: [], // Your data array
            pageCount: 0,
            perPage: 5, // Number of items per page
            currentPage: 0,
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            const data = res.data;
            this.setState({
                employees: res.data,
                pageCount: Math.ceil(data.length / this.state.perPage), data
            })
        });
    }

    handlePageClick = ({ selected }) => {
        this.setState({ currentPage: selected });
    };

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        const { data, perPage, currentPage, pageCount } = this.state;

        // Calculate the start and end index for the current page
        const startIndex = currentPage * perPage;
        const endIndex = startIndex + perPage;
    
        // Slice the data array based on the current page
        const currentData = data.slice(startIndex, endIndex);

        return (
            <div>
                 <br></br>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentData.map((employee) => (
                                        // this.state.employees.map(
                                        //employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>  

          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}  //page submit clicked
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          />
                 </div>
                 <div>
            
            </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
