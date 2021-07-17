import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../styles/nav.css"


function navbar() {
    return (
        <div>
            <>
<Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/" style={{color: 'white',fontSize: "1.4rem"}}>Projwal</Navbar.Brand>
  <Nav className="me-auto">
    {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="gallery">Gallery</Nav.Link>
    <Nav.Link href="contact">Contact</Nav.Link> */}
                

                <Link className="nav-items" style={{ color: "#fff", fontSize: "0rem", textDecoration: "none", marginLeft: "0.5rem" }} to="/">
                  <button className="btn btn-primary">
                    
                  Home
                 </button>
                </Link>
                <Link className="nav-items" style={{color: "#fff",fontSize: "0rem",textDecoration: "none", marginLeft: "0.5rem"}}to="/gallery">
                  <button className="btn btn-primary">

                  Gallery
                  </button>
                  </Link>
                <Link className="nav-items" style={{color: "#fff",fontSize: "0rem",textDecoration: "none", marginLeft: "0.5rem"}}to="/contact">
                  <button className="btn btn-primary">

                  Contact
                  </button>
                  </Link>
               
    </Nav>  
  </Container>
</Navbar>


</>

        </div>
    )
}

export default navbar
