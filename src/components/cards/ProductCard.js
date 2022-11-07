import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../button/AddtoCardButton";

const ProductCard = ({ image, id, title, price }) => {
  return (
    <Link to={`/${id}`}>
      <div className="product__item">
        <div className="product__img">
          <img src={image} alt="product-img" className="w-50" />
        </div>

        <div className="product__content">
          <h5>
            <Link to={`/${id}`}>{title}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">${price}</span>
            <AddButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;