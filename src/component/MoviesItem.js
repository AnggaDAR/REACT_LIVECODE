import React, { Component } from 'react';

class MoviesItem extends Component {
  render() {
    return (
        <div className="row justify-content-between mx-5 my-3 p-3 border rounded-lg">
            <div className="col-md-2 col-12">
                <img style={{width: "100%"}} src={this.props.img}/>
            </div>
            <div className="col-md-10 col-12 text-left">
                <h3>{this.props.title}</h3>
                <h5>{this.props.year}</h5>
                <p>{this.props.synopsis}</p>
            </div>
        </div>
    );
  }
}

export default MoviesItem;
