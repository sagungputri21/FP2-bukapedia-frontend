import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import CartQuantity from "./CartQuantity";
import "../../styles/cart-item-style.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const CartItemDesktop = ({ item }) => {
  const { id, image, title, category, price, itemQuantity } = item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const increaseQty = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        category,
        image,
        price,
      })
    );
  };

  const decreaseQty = () => {
    dispatch(cartActions.removeItem(id));
  };

  const stock = JSON.parse(localStorage.getItem("stock")).find(
    (item) => item.id === id
  );

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
            <p className="product-name">{title}</p>
            <p className="category">{category}</p>
            {stock.qty < itemQuantity ? (
              <p className="text-note">
                <span style={{ color: "red"}}>
                  {" "}
                  *The number of orders exceeds the available stock!
                </span>
              </p>
            ) : (
              <p className="text-note"></p>
            )}
          </div>
        </div>
        <div className="d-flex px-10 right-content">
          <p className="price">${price}</p>
          <CartQuantity
            itemQuantity={itemQuantity}
            increase={increaseQty}
            decrease={decreaseQty}
          />
          <p className="d-flex gap-2 total">
            Total : <span className="price">${priceCount}</span>
          </p>
        </div>
      </div>
      <Button
        variant="danger"
        className="px-3 fs-6 delete-button"
        onClick={deleteItem}
      >
        x
      </Button>
    </section>
  );
};

export default CartItemDesktop;
