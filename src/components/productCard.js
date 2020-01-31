import React from "react";

export default props => {
  return (
    <div className="product-card">
      <img src={props.productDetails.images[0].base_url + props.productDetails.images[0].primary}  className="product-card__img" alt={props.productDetails.title} />
      <div className="product-card__title">
        {props.productDetails.title}
      </div>
      <h5>{props.productDetails.brand}</h5>
      <h2>
        ${props.productDetails.list_price.price}
      </h2>
      <button className="target_btn">Add to cart</button>
    </div>
  );
}
