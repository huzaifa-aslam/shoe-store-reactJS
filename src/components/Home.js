import React from "react";
import Slider from "./Slider";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Slider />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
