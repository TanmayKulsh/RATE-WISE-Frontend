import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Screenshot_2023-03-08_152245-removebg-preview.png";

// import "./NavBar.css";




const NavBar = () => {
    var loggedinperson;

    const [currentUser, serCurrentUSer] = useState(undefined);


    useEffect(() => {
        loggedinperson = JSON.parse(localStorage.getItem("user"));
        if (loggedinperson) {
            serCurrentUSer(loggedinperson);
            console.log(localStorage.getItem("user").firstNAme)
        }
    }, [])


    const logout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");

        window.location.reload();
    }







    return (
        <div style={{ position: "fixed", zIndex: "1001", width: "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "black", color: "white" }}>
                <a className="navbar-brand" href="/"><img style={{ width: "100px" }} src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactus">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    &nbsp;&nbsp;
                    &nbsp;

                    {
                        currentUser
                            ? (
                                <div>
                                    <button class="btn btn-secondary" type="button">
                                        {/* {
                                            localStorage.getItem(user.firstNAme)
                                        } */}
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    <button class="btn btn-secondary person" type="button" onClick={logout}>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div class="dropdown">
                                    <div>
                                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="true">
                                            <a href="/userlogin" style={{ textDecoration: "none", }}>User Login</a>

                                        </button>
                                        &nbsp;
                                        &nbsp;
                                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="true" href="/adminlogin">
                                            <a href="/adminlogin" style={{ textDecoration: "none" }}>Admin Login</a>
                                        </button>
                                    </div>

                                </div>
                            )}
                </div>
            </nav>
        </div>
    );

}


export default NavBar;