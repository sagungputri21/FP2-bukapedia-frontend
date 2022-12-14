import React from "react";
import '../../styles/update-stock.css'

const InputStock = ({ value, onChange, action }) => {
  return (
    <div className="d-flex gap-2 mx-auto update-action">
      <input 
        className="py-1"
        type="number"
        min={1}
        max={20}
        defaultValue={value}
        onChange={onChange}
      />
      <button
        className="update-button px-3"
        type="submit"
        onClick={action}
      >
        update
      </button>
    </div>
  );
};

export default InputStock;
