import React from "react";
import "./product.css";

const Product = (props) => {
  // props gedeg n component dotor bga product.js file aas
  // ugugdul damjuulj bui heseg engiineer product js file
  // aas vndsen App.js file ruu props gedeg zvileer damjuulj ugugdluu
  // ywuulj bui heseg ym.
  return (
    <div className="Product">
      <div className="Product_container">
        <div className="Product_cart" key={props.id}>
          <div className="Product_cart_image">
            <img src={props.image} alt="/" />
          </div>
          <div className="Product_cart_description_container">
            <h1>{props.name}</h1>
            <h4>{props.description}</h4>
            <p>{props.price} ₮</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
