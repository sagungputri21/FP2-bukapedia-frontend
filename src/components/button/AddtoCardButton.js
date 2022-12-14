import React from "react";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";
import useGlobalState from "../../useGlobal";
import { useNavigate } from "react-router-dom";

const AddButton = ({extraStyle, id, title, category, image, price }) => {
  // const {id, title, category, image, price} = item
  const [stateLogin, dispatchLogin] = useGlobalState()
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const addToCart = () => {
    if(stateLogin.user===0){
      navigate("/login")
    } else {
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