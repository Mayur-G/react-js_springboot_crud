import React, { Component } from 'react'
import '../App.css';
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name : </label>&nbsp;
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name : </label>&nbsp;
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID : </label>&nbsp;
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>  
                </div>                
                <br></br>
                         <div class="row justify-content-center">
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </div>
                <br></br>
            </div>
            
        )
    }
}

export default ViewEmployeeComponent
