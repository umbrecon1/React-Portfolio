import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
          
        
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        
      </Container>
    </footer>
  )
}
