import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import { connect } from "unistore/react"
import { actions } from "../store"
import logo from "../logo.svg"

class Login extends Component{
    // state = { username: "", password: ""};
    // changeInput = e => {
    //     this.setState({[e.target.name]: e.target.value});
    // };
    doLogin = () =>{
        this.props.postLogin().then(
            () => {
                console.log("sip"+this);
                this.props.history.push("/profile")
            }
        ) 
    }
    render(){
        console.log("login props: ", this.props);
        return (
            <section className="row my-5 mx-0 justify-content-center">
                <form onSubmit={e => e.preventDefault()} className="col-4 border p-5">
                    <h4 className="text-center">Login</h4>
                    <img src={logo} style={{height:"30%"}}/>
                    <div>
                        <input
                            className="form-control m-1"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={e => this.props.setField(e)}
                        />    
                    </div>                
                    <div>
                        <input
                            className="form-control m-1"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => this.props.setField(e)}
                        />    
                    </div> 
                    <button onClick={() => this.doLogin()}>Login</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
        )
    }
}

export default connect("username,password",actions) (withRouter(Login));