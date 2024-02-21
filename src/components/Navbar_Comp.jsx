// Navbar_Comp.js

import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Container,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import './Navbar.css';

function Navbar_Comp() {
  const [showNav, setShowNav] = useState(false);

  const navLinkStyle = {
    fontSize: '20px',
    fontWeight: 'italic',
    margin: '0 10px',
    color: 'black',
    textDecoration: 'black',
    transition: 'color 0.1s ease-in-out',
  };

  const formControlStyle = {
    fontSize: '16px',
    marginRight: '10px',
  };

  const buttonStyle = {
    fontSize: '25px',
    margin: '0 10px',
  };

  const navbarStyle = {
    backgroundColor: 'white',
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      <Container fluid>
        <div className="nav__container">
        
          <Navbar.Brand href="/" style={{ fontSize: '30px', fontWeight: 'bold', color: 'black' }}>
            INFI- BOOKS
          </Navbar.Brand>
          <div className="nav__toggle-btn" onClick={toggleNav}>
            {showNav ? <AiOutlineClose /> : <FaBars />}
          </div>
          <div className={`nav__menu ${showNav ? 'nav__menu--active' : ''}`}>
            <Nav.Link href="/" style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" style={navLinkStyle}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/events" style={navLinkStyle}>
              Events
            </Nav.Link>
            
            <Nav.Link   as={Link} to="/contactus "style={navLinkStyle}>
              Contact
            </Nav.Link>
           
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={formControlStyle}
            />
            <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
              Search
            </Button>
            <Link to='/login'>
              <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
                Login
              </Button>
            </Link>
            <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
              Cart
            </Button>
          </Form>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar_Comp;
