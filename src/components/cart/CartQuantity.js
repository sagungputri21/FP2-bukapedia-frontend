import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const CartQuantity = ({itemQuantity, id, title, category, image, price}) => {
  // const {itemQuantity, id, title, category, image, price} = item;
  const dispatch = useDispatch();
  
  const increaseQty = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        category,
        image,
        price
      })
    )
  }

  const decreaseQty = () => {
    dispatch(
      cartActions.removeItem(id)
    );
  }

  return (
    <div className="update-quantity">
      <button className="button-quantity" onClick={decreaseQty}>-</button>
      <input
        value={itemQuantity}
        className="input-quantity"
        // onChange={handleChange}
      />
      <button className="button-quantity" onClick={increaseQty}>+</button>
    </div>
  );
};

export default CartQuantity;
