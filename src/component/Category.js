import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/category.css"

class Category extends Component {
    render() {
        return (
            <section className="article mx-5 my-5">
                <div className="row justify-content-center px-5 mx-2">
                    <div className="card-deck">
                        <div className="card border-0">
                            <h5 className="card-title">Romance</h5>
                            <img src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" className="card-img-bottom" alt="..."/>
                            <div className="card-body">
                                <Link to="/romance" className="btn btn-success">See More</Link>
                            </div>
                        </div>
                        <div className="card border-0">
                            <h5 className="card-title">Action</h5>
                            <img src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <Link to="/action" className="btn btn-success">See More</Link>
                            </div>
                        </div>
                        <div className="card border-0">
                            <h5 className="card-title">Fiction </h5>
                            <img src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <Link to="/fiction" className="btn btn-success">See More</Link>
                            </div>
                        </div>
                        <div className="card border-0">
                            <h5 className="card-title">Comedy </h5>
                            <img src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <Link to="/comedy" className="btn btn-success">See More</Link>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
        )
    }
}

export default Category