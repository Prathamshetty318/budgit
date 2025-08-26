import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="overlay">
                <div className="content-card">
                    <h1> Welcome To Budgit</h1>
                    <p>TRack, Split, Manage Your expense effortlessly using Budgit</p>
                    <Link to="/login" className="btn">Get Started</Link>
                </div>
            </div>
    </div>
    );
}

export default Home;
