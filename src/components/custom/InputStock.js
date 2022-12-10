import React from "react";

const InputStock = ({ value, onChange, action }) => {
  return (
    <div className="d-flex gap-2">
      <input 
        className=""
        type="number"
        min={1}
        max={20}
        defaultValue={value}
        onChange={onChange}
      />
      <button
        className=""
        type="submit"
        onClick={action}
      >
        update
      </button>
    </div>
  );
};

export default InputStock;
