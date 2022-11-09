import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../button/AddtoCardButton";
import "../../styles/product-card.css";
import { Card } from "react-bootstrap";

const ProductCard = ({ image, id, title, price, rate, count }) => {
  return (
    <Card className="product_item">
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <div className="product_img">
          <img src={image} alt="product-img" className="image" />
        </div>
        <div className="product_info">
          <Link to={`/${id}`} style={{ textDecoration: "none" }}>
            <h5 className="text-dark">{`${
              title.length >= 65 ? `${title.substring(0, 60)}...` : `${title}`
            }`}</h5>
          </Link>
          <div className="price_rating d-flex row align-items-center">
            <span className="product_price">${price}</span>
            <div className="product_rating d-flex align-items-center gap-1">
              <img className="star_image" src="" />
              <p>
                {rate} | {count}
              </p>
            </div>
          </div>
          <div className="w-full">
            <AddButton />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
