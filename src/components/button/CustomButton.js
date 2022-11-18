import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ text, onClick, extraStyle }) => {
   return (
      <div>
      <Button
        onClick={onClick} 
        className={`py-1.5 fs-6 ${extraStyle}`}
      >{text}
      </Button>
   </div>
   )
};

export default CustomButton;