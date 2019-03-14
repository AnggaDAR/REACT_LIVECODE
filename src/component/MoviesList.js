import React, { Component } from 'react';
import MoviesItem from './MoviesItem';
import image from '../images/alphatech.png'

class MoviesList extends Component {

    render() {
        const listMovies = this.props.listMovies;
        console.log(listMovies);
        return (
            <div >
                {listMovies.map((item, key) => {
                const img = item.Poster;
                const title = item.Title;
                const year = item.Year;
                const synopsis = item.Synopsis;
                return <MoviesItem key={key} img={img} title={title} year={year} synopsis={synopsis} />
                })}
            </div>
        );
    }
}

export default MoviesList;
