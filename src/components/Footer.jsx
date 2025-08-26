import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <footer className="home-footer">
            
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Budgit</h4>
                    <Link to ="/about">About Us</Link>
                    <Link to ="/contact">Contact</Link>
                    <Link to ="/privacy">Privacy Policy</Link>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="Facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="Twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="footer-right">
                    <p>@ 2025 Budgit. All rights reserved.</p>
                    <p>Made by Pratham</p>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;