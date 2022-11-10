import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../button/AddtoCardButton";
import "../../styles/product-card.css";
import { Card } from "react-bootstrap";

const CategoryCard = ({ image, id, title, price, rate, count, category}) => {
  return (
    <Card className="product_item">
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <div className="product_img">
          <img
            src={image}
            alt="product-img"
            className="image"
            style={{ background: "none" }}
          />
          <p className="product_category px-2 py-1 rounded-start">{category}</p>
        </div>
        <div className="product_info">
          <Link to={`/${id}`} style={{ textDecoration: "none" }}>
            <h5 className="text-dark">{`${
              title.length >= 50 ? `${title.substring(0, 45)}...` : `${title}`
            }`}</h5>
          </Link>
          <div className="bottom_section mx-auto">
            <div className="price_rating d-flex align-items-center">
              <span className="product_price">${price}</span>
              <div className="product_rating d-flex align-items-center gap-1">
                <img className="star_image" src="/icons/star.png" />
                <p className="rate">
                  {rate} | {count}
                </p>
              </div>
            </div>
            <div className="btn">
              <AddButton extraStyle={'w-full px-10 py-2'}/>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CategoryCard;
