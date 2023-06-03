import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/NavigationBar.css'

import { useTheme } from '../hooks/useTheme';





function NavigationBar() {
  
 const { color, changeColor } = useTheme();



  return (
    <Navbar  style={{ background: color }} expand="lg" >
      <Navbar.Brand href="#">Hittbook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link"  to="#">Books</Link>
          <Link className="nav-link" to="#">Magazines</Link>
          <Link className="nav-link" to="#">Journals</Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;




