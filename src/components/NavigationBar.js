import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/NavigationBar.css'

import { useTheme } from '../hooks/useTheme';





function NavigationBar() {
  
 const { color, changeColor } = useTheme();



  return (
    <Navbar  style={{ background: color }} expand="lg"  onClick={() => changeColor('pink') }>
      <Navbar.Brand href="#">Hittbook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Books</Nav.Link>
          <Nav.Link href="#">Magazines</Nav.Link>
          <Nav.Link href="#">Journals</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;




