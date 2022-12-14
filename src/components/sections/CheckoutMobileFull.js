import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import { useSelector } from "react-redux";

const CheckoutFull = ({ onClick }) => {
    const navigate = useNavigate();
    const total = useSelector((state) => state.cart.totalAmount);
    return (
      <section className="checkout-section-desktop">
        <div className="subtotal-text">
            <h5 className="sub">Subtotal : </h5>
            <h5 className="total">${total}</h5>
        </div>
        <div className="d-flex cart-double-button">
          <CustomButton
            text="< Back to Shop" 
            onClick={() => navigate("/")}
            extraStyle=""
          />
            <CustomButton
            text="Checkout Now" 
            onClick={onClick}
            extraStyle=""
          />
        </div>
      </section>
    )
}

export default CheckoutFull;