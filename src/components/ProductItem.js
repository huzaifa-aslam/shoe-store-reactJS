import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from './Productitem.module.css'

import Shoes from "../db/db.json";
function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);
  if (!shoe) {
    return <h2>Product Not Found</h2>;
  }
  //console.log(Shoes)
  return (
    <div>
      {/* <div >
            <h4>{shoe.name}</h4>
            <img src={shoe.img} height="100px" />
          </div> */}

      <Container>
        <h1 className="text-center p-3">Produc Detail</h1>

        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-between"
          >
            <Card style={{ width: "33rem" }} className={styles.cardHeight}>
              <Card.Img variant="top" src={shoe.img} className={styles.imgHeight} />
              <Card.Body>

                <Card.Text>{`PKR ${shoe.price}`}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Card >

              <Card.Body>
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>{shoe.disc}</Card.Text>

                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductItem;
