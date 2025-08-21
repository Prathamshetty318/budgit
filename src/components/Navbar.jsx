import React  from "react";
import {Link} from "react-router-dom";
import "./navbar.css";


function Navbar(){
    return(
        <nav className="navbar">
            <h2> Budgit </h2>
            <ul>
                <li><button><Link to ="/">Home</Link></button></li>
                <li><button><Link to="/Login">Sign in  </Link></button></li>
                <li><button><Link to="/Register">Sign up</Link></button></li>
            </ul>
        </nav>
        );
}

export default Navbar;
