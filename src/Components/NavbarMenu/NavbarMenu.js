import React from "react";

import './navbarMenu.css'

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import { AiOutlineBehance, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

export default function NavbarMenu() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} id="navBar">
          <Container fluid>
            <div className="listaIcones">

              <Navbar.Brand href="https://www.instagram.com/craquenerivan/" target="_blank" className="icones">
                <AiOutlineInstagram className="icone" />
              </Navbar.Brand>
              <Navbar.Brand href="https://www.youtube.com/channel/UCgh4q2wd2vz2_mw5Z3-nDyg" target="_blank" className="icones">
                <AiOutlineYoutube className="icone" />
              </Navbar.Brand>
              <Navbar.Brand href="https://www.behance.net/caiquenerivan" target="_blank" className="icones">
                <AiOutlineBehance className="icone" />
              </Navbar.Brand>
            </div>


            <Navbar.Brand href="#home" className="logo">CN.</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="hamburger" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="logo">
                  CN.
                </Offcanvas.Title>
              </Offcanvas.Header>


              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 menuItens">

                  <Nav.Link href="#Home" className="sidebar">Home</Nav.Link>
                  <Nav.Link href="#skills" className="sidebar">Skills</Nav.Link>
                  <Nav.Link href="#portfolio" className="sidebar">Portfolio</Nav.Link>
                  <Nav.Link href="#about" className="sidebar">About</Nav.Link>
                  <Nav.Link href="#contact" className="sidebar">Contact</Nav.Link>

                </Nav>

              </Offcanvas.Body>

              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

