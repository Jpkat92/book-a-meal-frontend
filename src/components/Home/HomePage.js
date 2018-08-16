import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Menu from '../Menu'

class HomePage extends Component {
    render() {
      return (
            <div className="wrapper">
                <div className="jumbotron">
                    <h1>Welcome to Book-A-Meal</h1>
                    <p>Order your favourite meals hassle free!</p>
                    <Link to="/signup" className="btn btn-primary">Sign up today</Link>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="mainContent">
                        <Menu/>
                    </div>
                    </div>
                </div>
        </div>
      );
    }
  }

export default HomePage;
