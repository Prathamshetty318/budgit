import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
    
            <header className="home-header">
                <h1>Welcome To Budgit</h1>
                <div className="top-buttons">
                    <button><a href="/login" class="top-buttons"><h3>Login</h3></a></button>
                    <button><a href="/register" class="top-buttons"><h3>Register</h3></a></button>
                </div>
            </header>

            <main className="home-main">
                <p>Your personal budget tracker with powerful features</p>
                <Link to="/login" className="btn">Get Started</Link>
            </main>
            <footer className="home-footer">
                <p>Made by Pratham</p>
            </footer>
    </div>
    );
}

export default Home;
