import React from "react";

const CartQuantity = ({itemQuantity, increase, decrease}) => {

  return (
    <div className="update-quantity">
      <button className="button-quantity" onClick={decrease}>-</button>
      <input
        value={itemQuantity}
        className="input-quantity"
        // onChange={handleChange}
      />
      <button className="button-quantity" onClick={increase}>+</button>
    </div>
  );
};

export default CartQuantity;
