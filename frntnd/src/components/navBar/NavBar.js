import React from "react";  
import logo from "../../images/Screenshot_2023-03-08_152245-removebg-preview.png";
import "./NavBar.css";




const NavBar = () => {


return (
    <div style={{position:"fixed", zIndex:"1001",width:"100%"}}>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:"black", color:"white"}}>
<a className="navbar-brand" href="/"><img style={{width:"100px"}} src={logo}></img></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
<form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
&nbsp;&nbsp;
&nbsp;<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
Login 
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Admin</a>
<a class="dropdown-item" href="#">User</a>
  </div>
</div>
</div>
</nav>
</div>
);

}


export default NavBar;