import React, {useState} from "react";

const CartQuantity = ({itemQuantity}) => {
  const [quantity, setQuantity] = useState('');

  const handleChange = (event) => {
    setQuantity(event.target.value);

    console.log("value is:", event.target.value);
  };

  itemQuantity = quantity;

  return (
    <div className="update-quantity">
      <button className="button-quantity">-</button>
      <input
        value={quantity}
        className="input-quantity"
        onChange={handleChange}
      />
      <button className="button-quantity">+</button>
    </div>
  );
};

export default CartQuantity;
