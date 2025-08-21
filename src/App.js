import React from "react";
import { BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";


function App(){
  return (
    <Router>
      <div className="app-cntainer">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;