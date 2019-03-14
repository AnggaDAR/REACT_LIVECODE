import React from 'react';
import { Redirect } from "react-router-dom"
// import {withRouter} from "react-router-dom";

const NotFound = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    console.log("is_login", is_login);

    return (
        <section className="row my-5 mx-0 justify-content-center">
            <div className="col-12">
                <h1 className="text-center">Oops, Page Not Found</h1>
            </div>
        </section>
    );
}

export default NotFound