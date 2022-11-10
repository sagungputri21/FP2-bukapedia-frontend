import React from "react";
import CustomButton from "./CustomButton";

const AddButton = ({extraStyle}) => {
  return (
    <div>
      <CustomButton 
        text="Add to cart"
        onClick={""}
        extraStyle={extraStyle}
      />
    </div>
  )
}

export default AddButton;