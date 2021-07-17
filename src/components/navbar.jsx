import React,{useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar1() {
  
  
  

  return (
    <div>
      <>
        <Navbar className="main-nav">
          <Container>
            <Navbar.Brand
              href="/"
              style={{ color: "white", fontSize: "1.4rem" }}
            >
              Projwal
            </Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link> */}

              <Link
                className="nav-items"
                style={{
                  
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginLeft: "1rem",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-items"
                style={{
                  
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginLeft: "0.7rem",
                }}
                to="/gallery"
                
              >
                Gallery
              </Link>
              <Link
                className="nav-items"
                style={{
                  
                  fontSize: "1rem",
                  textDecoration: "none",
                  marginLeft: "0.7rem",
                }}
                to="/contact"
              >
                Contact
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Navbar1;
