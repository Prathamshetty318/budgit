import React,{useState}  from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="card">
            <h2>Login to Budgit</h2>
            <form  onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
                <input
                type="Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                <button type="Submit">Login</button>
            </form>
            <Link to ="/"><h3>🠠Back</h3></Link>
        </div>
    );


}

export default Login;