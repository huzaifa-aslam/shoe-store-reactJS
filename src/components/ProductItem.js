import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col,Card ,Button} from "react-bootstrap";

import Shoes from "../db/db.json";
function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];
console.log(shoe)
  if (!shoe) {
    return <h2>Product Not Found</h2>;
  }
  //console.log(Shoes)
  return (

    <div>
<h1>ProductItem</h1>


          {/* <div >
            <h4>{shoe.name}</h4>
            <img src={shoe.img} height="100px" />
          </div> */}

<Container>
  <Row>
          <Col lg={6} md={6} sm={12} xs={12} >


                {/* <h3>{shoe.name}</h3>
                <img src={shoe.img} height="100px" /> */}
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top"  src={shoe.img} />
                  <Card.Body>
                    <Card.Title>{shoe.name}</Card.Title>
                    <Card.Text>
                     {shoe.disc}
                    </Card.Text>
                    <Card.Text>
                     {`PKR ${shoe.price}`}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>


            </Col >
            <Col lg={6} md={6} sm={12} xs={12}>
              hello world
            </Col>
            </Row>
            </Container>

    </div>
  );
}

export default ProductItem;
