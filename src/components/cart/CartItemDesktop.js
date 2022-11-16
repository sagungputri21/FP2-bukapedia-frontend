import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import CartQuantity from "./CartQuantity";
import "../../styles/cart-item-style.css";

const CartItemDesktop = ({ image, name, category, price, itemQuantity }) => {
  const priceCount = price * itemQuantity;

  return (
    <section className="d-flex full_section">
      <div className="item d-flex">
        <div className="d-flex gap-5">
          <img
            src={image}
            alt="img-product"
            id="img-product"
            className="w-24 h-24 bg-white"
          />
          <div className="product-info">
            <p className="product-name">{name}</p>
            <p className="category">{category}</p>
          </div>
        </div>
        <div className="d-flex px-10 right-content">
          <p className="price">${price}</p>
          <CartQuantity itemQuantity={itemQuantity} />
          <p className="d-flex gap-2 total">
            Total : <span className="price">${priceCount}</span>
          </p>
        </div>
      </div>
        <Button variant="danger" className="px-3 fs-6 delete-button" onClick={""}>
          x
        </Button>
    </section>
  );
};

export default CartItemDesktop;
