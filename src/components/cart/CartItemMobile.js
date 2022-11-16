import React from "react";
import CartQuantity from "./CartQuantity";
import { Button } from "react-bootstrap";

const CartItemMobile = ({ image, name, category, price, itemQuantity }) => {
  const priceCount = price * itemQuantity;
  return (
    <section className="border p-3">
      <div className="">
        <Button variant="danger" className="delete-mobile" onClick={""}>
          x
        </Button>
        <div className="d-flex gap-5 container-xxl">
          <img
            src={image}
            alt="img-product"
            id="img-product"
            className="w-24 h-24 bg-white"
          />
          <div className="product-info">
            <p className="product-name">{`${
              name.length >= 50 ? `${name.substring(0, 45)}...` : `${name}`
            }`}</p>
            <p className="category">{category}</p>
            <div className="d-flex cart-quantity">
              <p className="d-flex gap-2 price">${priceCount}</p>
              <CartQuantity itemQuantity={itemQuantity} />
            </div>
          </div>
        </div>
        <hr className="hr"/>
        <p className="text-note">Note: -</p>
      </div>
    </section>
  );
};

export default CartItemMobile;
