import React from "react";
import Shoes from "../db/db.json";
import { Link } from "react-router-dom";

function Products() {
  //console.log(Shoes);
  return (
    <div>
      <h1>Products</h1>
      {Object.keys(Shoes).map((keyName, ind) => {
        const shoe = Shoes[keyName];

        return (
          <div key={ind}>
            <Link to={`/product/${keyName}`}>
              <h3>{shoe.name}</h3>
              <img src={shoe.img} height="100px" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
