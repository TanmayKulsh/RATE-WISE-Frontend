import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import logo from "../images/ratewiselogo.png";
import logo2 from "../images/Screenshot_2023-03-08_152245-removebg-preview.png";
import './NavigationBar.css';

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (

    <nav>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <img className='logo' src={logo2}></img>
      <ul className={showMenu ? 'show-menu' : ''}>
        <li></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}


export default NavigationBar;
