import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../button/AddtoCardButton";

const ProductCard = ({ image, id, title, price, rate, count }) => {
  return (
    <Link to={`/${id}`}>
      <div className="product_item">
        <div className="product_img">
          <img src={image} alt="product-img" className="w-50" />
        </div>

        <div className="product_info">
        <Link to={`/${id}`}>
          <h5>{title}</h5>
        </Link>
          <div className=" d-flex align-items-center justify-content-between">
            <span className="product_price">${price}</span>
            <div className="product_rating d-flex align-items-center gap-1">
              <img className="star_image" src="" />
              <p>{rate} | {count}</p>
            </div>
          </div>
          <div className="w-full">
          <AddButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;