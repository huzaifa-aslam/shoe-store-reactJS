import React from "react";
import { useParams } from "react-router-dom";
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


          <div >
            <h4>{shoe.name}</h4>
            <img src={shoe.img} height="100px" />
          </div>


    </div>
  );
}

export default ProductItem;
