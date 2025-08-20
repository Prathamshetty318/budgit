import React, { useState } from "react";
import "./register.css"

function Register() {

    const[name,setName] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]= useState("");

    const handlesubmit =(e) => {
        e.preventDefault();
        console.log("Register with", name,email,password);
    };


    return (
        <div className="card">
            <form  onSubmit={handlesubmit}>
                <h2>Register Page</h2>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>

    );
}

export default Register;
