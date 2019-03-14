import React, { Component } from 'react';
// import logo_alterra from '../images/logo/logo-alterra-academy.png'
import logo from '../logo.svg';
import '../styles/header.css';
import { Link } from "react-router-dom";
import { connect } from "unistore/react"
import { actions } from "../store"

class LogButton extends Component {
    render() {
        if(!this.props.isLogin){
            return (
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            )
        } else {
            return (
                <li className="nav-item dropdown">
                    <Link to="#" onClick={() => this.props.postLogout()}>Logout</Link>
                </li>
            )
        }
    }
}

// export default LogButton;
export default connect("isLogin", actions)(LogButton)
