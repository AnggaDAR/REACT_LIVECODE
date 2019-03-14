import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import TopStory from "../components/TopStory"
// import StoryList from "../components/StoryList"
// import Search from "../components/Search"
import Category from "../component/Category"
import { connect } from "unistore/react"
import { actions } from "../store"

// import '../styles/gallery.css'

const baseUrl = "https://newsapi.org/v2/"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class Home extends Component {
    // constructor(props){
    //     super(props);
    
    //     this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount(){
    //     this.props.searchNews("a")
    // }
    // handleChange(event){
    //     this.props.searchNews(event.target.value);
    // }
    
    
    render() {
        return (
            <div>
                <Category/>
            </div>
        );
    }
}

export default Home;
// export default connect("isLogin,listTopStory,listStory",actions)(Home);
