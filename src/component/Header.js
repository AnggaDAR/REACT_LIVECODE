import React, { Component } from 'react';
// import logo_alterra from '../images/logo/logo-alterra-academy.png'
import logo from '../logo.svg';
import '../styles/header.css';
import { Link } from "react-router-dom";
import LogButton from "./LogButton"
// import { connect } from "unistore/react"
// import { actions } from "../store"

class Header extends Component {
  render() {
    return (
        <header className="m-0 p-0 shadow-lg sticky-top bg-white">
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <div className="col-sm-12 col-md-12 col-lg-2 text-center">
                        <Link to="/">
                            <img src={logo} className="logo" alt="" />
                        <div className="navbar-brand">
                            Movie
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">Profile</Link>
                            </li>
                            <LogButton/>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
// export default connect("is_login", actions)(Header)
