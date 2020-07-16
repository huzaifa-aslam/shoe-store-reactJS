import React from "react";
import Shoes from "../db/db.json";
import { Link } from "react-router-dom";
import { Container, Row, Col,Card ,Button} from "react-bootstrap";
import styles from "./Products.module.css";
import cx from 'classnames'

function Products() {




  return (
    <Container>
       <h1  className="text-center p-3">Our Products</h1>
      <Row className={styles.flex}>

        {Object.keys(Shoes).map((keyName, ind) => {
          let shoe = Shoes[keyName];
          let para=Shoes[keyName].disc;
          console.log(para)

          return (
            <Col lg={3} md={4} sm={6} xs={12} key={ind} className='mt-4'>
              <Col>
              <Link to={`/product/${keyName}`}>
                {/* <h3>{shoe.name}</h3>
                <img src={shoe.img} height="100px" /> */}
                <Card style={{ width: "16rem" }}  className="m-auto">
                  <Card.Img variant="top"   className={cx(styles.imgWidth)} src={shoe.img} />
                  <Card.Body>
                    <Card.Title>{shoe.name}</Card.Title>
                    <Card.Text>
                      {shoe.disc.slice(0, 20)+"..."}
                    </Card.Text>
                    <Card.Text>
                     {`PKR ${shoe.price}`}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Link>
              </Col>
            </Col>
          );
        })}
      </Row>

    </Container>
  );
}

export default Products;
