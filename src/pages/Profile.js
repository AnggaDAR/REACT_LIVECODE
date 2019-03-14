import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import {withRouter} from "react-router-dom";

class Profile extends Component {
    
    render(){
        // const is_login = JSON.parse(localStorage.getItem("is_login"));
        // const email = localStorage.getItem("email")
        // const full_name = localStorage.getItem("full_name")
        // console.log("is_login", is_login);
        console.log("asasasa")
        if(!this.props.isLogin){
            alert("Untuk melihat profile, silakan login dulu")
            return <Redirect to={{pathname: "/login"}} />
        } else {
            return (
                console.log(this.props.isLogin),
                <section className="row my-5 mx-0 justify-content-center">
                    <div className="col-lg-4 col-sm-8 col-12">
                        <h1 className="text-center">Profile</h1>
                        <img src={this.props.avatar} style={{height:"10%"}}/>
                        <p>
                            <label>Email:</label> {this.props.email}
                        </p>
                        <p>
                            <label>Username:</label> {this.props.username}
                        </p>
                    </div>
                </section>
            );
        }
    }
}

// export default Profile
export default connect("isLogin, username, email, avatar", actions)(withRouter(Profile))
