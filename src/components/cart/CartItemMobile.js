import React from "react";
import CartQuantity from "./CartQuantity";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const CartItemMobile = ({ item }) => {
  const { id, image, title, category, price, itemQuantity } = item;
  
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const priceCount = price * itemQuantity;
  return (
    <section className="border p-3 full-mobile">
      <div className="">
        <Button variant="danger" className="delete-mobile" onClick={deleteItem}>
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
            {/* <p className="product-name">{`${
              title.length >= 50 ? `${title.substring(0, 45)}...` : `${title}`
            }`}</p> */}
            <p className="product-name">{title}</p>
            <p className="category">{category}</p>
            <div className="d-flex cart-quantity">
              <p className="d-flex gap-2 price">${priceCount}</p>
              <CartQuantity itemQuantity={itemQuantity} />
            </div>
          </div>
        </div>
        <hr className="hr"/>
        <p className="text-note">Note : -</p>
      </div>
    </section>
  );
};

export default CartItemMobile;
