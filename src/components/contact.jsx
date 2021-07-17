import React from "react";
import Image from "../images/contact-image.jpg";
// import Image from "../images/1.jpg";

import { Container, Form } from "react-bootstrap";
import "../styles/contact.css";

function contact() {
  return (
    <div className="row fluid contact">
      <div className="contact-image">
        <img src={Image} />
      </div>

      <div className="contact-form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.8rem",color: "white" }}>
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
          </Form.Group>
          <Form.Group className="mb-3 mt-1" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mb-0" style={{ fontSize: "1.8rem",color:"white" }}>Message</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Enter message" />
          </Form.Group>
        </Form>

        <div className="direct">
          <div className="tel">Phone: 9841000000</div>
          <div className="email">Email: projwalkhadka@gmail.com</div>
        </div>
      </div>
      
    </div>
  );
}

export default contact;
