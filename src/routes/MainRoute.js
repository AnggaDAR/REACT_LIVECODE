import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Romance from "../pages/Romance";
import Action from "../pages/Action";
import Fiction from "../pages/Fiction";
import Comedy from "../pages/Comedy";
import Login from "../pages/Login"
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component = {Home}/>
            <Route path="/romance" component = {Romance}/>
            <Route path="/action" component = {Action}/>
            <Route path="/fiction" component = {Fiction}/>
            <Route path="/comedy" component = {Comedy}/>
            <Route exact path="/profile" component = {Profile}/>
            <Route exact path="/login" component = {Login}/>
            <Route component = {NotFound}/>
        </Switch>
    )
}

export default MainRoute;