import React  from "react";
import {Link} from "react-router-dom";
import "./navbar.css";


function Navbar(){
    return(
        <nav className="navbar">
            <h2> Budgit </h2>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/Login">Sign in  </Link></li>
                <li><Link to="/Register">Sign up</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
