import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  const phoneNumber = "069-13-23-645"; 
  const instagramLink = "https://www.instagram.com"; 
  

  const handleCallUsClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="footer " style={{color:"white"}}>
      <Container>
        <Row >
        <Col md={4} style={{padding:"1rem"}}>
          <Button variant="success" onClick={handleCallUsClick} style={{backgroundColor:"green", height:"3rem", width:"7rem"}}>
              Pozovi
            </Button></Col>
          <Col md={4}>
            <h5>Kontakt Informacije</h5>
            <p>Addresa: Bezboznicka 23</p>
            <p>Email: cecilija@gmail.com</p>
          </Col>
          <Col md={4}>
            <h5>Drustvene mreze</h5>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img src="/resources/instagram.png" alt="Instagram Logo" width="30" height="30" />
              @Vodo.instalacije
            </a>
            
          </Col>
          
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">
              &copy; 2023 Najjaca Firmetina SZR | Designed and Developed by{" "}
              <a href="https://github.com/kjovandev" target="_blank" rel="noopener noreferrer">
                kjovandev
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
