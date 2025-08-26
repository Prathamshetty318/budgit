import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
    const slidersettings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
    };

    return (
        <div className="home-container">
            <div className="overlay">
                <div className="hero-section">
                    <div className="content-card">
                        <h1> Welcome To Budgit</h1>
                        <p>TRack, Split, Manage Your expense effortlessly using Budgit</p>
                        <Link to="/login" className="btn">Get Started</Link>
                    </div>

                    <div className="slider-container">
                        <Slider {...slidersettings}>
                            <div>
                                <img src="/Assets/Images/"/>
                            </div>
                            <div>
                                <img src="/Assets/Images/"/>
                            </div>
                            <div>
                                <img src="/Assets/Images/"/>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="grid-section">
                    {[
                        {img: "/Assets/Images/", word:"Track"},
                        {img: "/Assets/Images/", word:"Split"},
                        {img:"/Assets/Images/", word:"Manage"},
                        {img:"/Assets/Images/", word:"Save"},
                    ].map((item,))}
                </div>
            </div>
    </div>
    );
}

export default Home;
