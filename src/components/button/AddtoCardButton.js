import React from "react";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const AddButton = ({extraStyle}, item) => {
  const { id, title, category, image, price } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        category,
        image,
        price,
      })
    )
    console.log("succes add to cart")
  }

  return (
    <div>
      <CustomButton 
        text="Add to cart"
        onClick={addToCart}
        extraStyle={extraStyle}
      />
    </div>
  )
}

export default AddButton;