import React, { Component } from 'react'
import logo from '../pics/git.jpg';
import '../css/header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="main">
                <img className= "gitImage" src={logo} height="100px" width="100px"/>
                <h2>Navbar-Test</h2>
                <div className='sub-main'>
                    <ul>
                        <li><a href="" >About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Vendor</a></li> 
                    </ul>
                </div>
                <button type="button">Subscribe</button>
            </div>
        )
    }
}

export default HeaderComponent
