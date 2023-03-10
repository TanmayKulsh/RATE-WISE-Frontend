import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/ratewiselogo.png";
import logo2 from "../../images/Screenshot_2023-03-08_152245-removebg-preview.png";

const Header = () => {
    return (
        <div className="header">
            <div className="headerleft">
            {/* <Link to="/"><img className="header__icon" src={logo2} /></Link> */}
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
} 

export default Header;