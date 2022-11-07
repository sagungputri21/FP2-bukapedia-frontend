import React from "react";
import { Button } from "bootstrap";

const CustomButton = ({ text, onClick, extraStyle }) => {
   <div>
      <Button
        onClick={onClick} 
        className={`py-2 px-3 fs-6 ${extraStyle}`}
      >{text}
      </Button>
   </div>
}

export default CustomButton;