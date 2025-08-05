import React,{useState}  from "react";
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
        <div className="login-container">
            <form className="login-Form" onSubmit={handleLogin}>
                <h2>Login to Budgit</h2>
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
        </div>
    );
}

export default Login;