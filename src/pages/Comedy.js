import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import MoviesList from "../component/MoviesList"

const moviesUrl = "https://api-todofancy.herokuapp.com/api/movies"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"

class Action extends Component {
    constructor(props){
        super(props);
        this.state = {
            listMovies : [],
        }
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.getMovies("comedy")
    }
    
    getMovies(value){
        console.log("val : " + value)
        const self = this;
        axios
        .get(moviesUrl)
        .then(function(response){
        console.log(response.data.movies)
        const data = response.data.movies.filter(function (item) {
            return item.Category == value;
        });
        console.log("comedy", data)
        self.setState({listMovies: data});
        })
        .catch(function(error){
        console.log(error)
        })
    }
    render() {
        return (
            <div>
                <h1>Action</h1>
                <MoviesList listMovies={this.state.listMovies}/>
            </div>
        );
    }
}

export default Action;
// export default connect("isLogin,listTopStory,listStory",actions)(Home);
