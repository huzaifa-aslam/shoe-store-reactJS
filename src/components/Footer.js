import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Row className="bg-primary text-white p-3">
        <Col className="p-0 text-center">
         <h5> All RIghts Reserved.</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
