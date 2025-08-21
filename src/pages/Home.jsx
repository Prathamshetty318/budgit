import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <main className="home-main">
                <p>Your personal budget tracker with powerful features</p>
                <Link to="/login" className="btn">Get Started</Link>
            </main>
    </div>
    );
}

export default Home;
