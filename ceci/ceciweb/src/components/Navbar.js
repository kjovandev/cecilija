import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

const ResponsiveNavbar = () => {
 return (
    <Navbar className='' bg="black"  variant="dark" expand="sm" style={{position:"fixed", top:"0", width:"100%", zIndex:"1000000", padding:"0.3rem", paddingRight:"1rem"}} >
      <Container style={{minWidth:"100%"}} >
        <Navbar.Brand href="/">
          <Image
            src="/resources/img2.jpg"
            alt="Logo"
            style={{ maxHeight: '100%',
            maxWidth: '100%',
            height:"60px",
            width:"70px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          {/* POPRAVITI JUSTIFY CONTENT ILI SLICNO DA PREDJE NA DESNU STRANU */}
          <Nav className="me-auto" >
            <Nav.Link className="text-uppercase text-white fs-7 fw-bold" href="/">Početna</Nav.Link>
            <Nav.Link className="text-uppercase text-white fs-7 fw-bold"  href="/about">O nama</Nav.Link>
            <Nav.Link className="text-uppercase text-white fs-7 fw-bold"  href="/contact">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
};

export default ResponsiveNavbar;

