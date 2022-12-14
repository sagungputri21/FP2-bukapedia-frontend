import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/product-card.css";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { cartActions } from "../../features/cart/cartSlice";
import CustomButton from "../button/CustomButton";
import AddButton from "../button/AddtoCardButton";

const ProductCard = ({ image, id, title, price, rate, count, category }) => {
  const navigate = useNavigate();

  return (
    <Card className="product_item">
      <div onClick={() => navigate(`/product/${id}`)}>
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
        <h5
          className="text-dark"
          onClick={() => navigate(`/product/${id}`)}
        >{`${
          title.length >= 50 ? `${title.substring(0, 45)}...` : `${title}`
        }`}</h5>
        <div className="bottom_section mx-auto">
          <div className="price_rating d-flex align-items-center">
            <span className="product_price">${Math.round(price)}</span>
            <div className="product_rating d-flex align-items-center gap-1">
              <img className="star_image" src="/icons/star.png" />
              <p className="rate">
                {rate} | {count}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="add-cart-button">
        <AddButton 
          extraStyle={"btn-add mx-auto px-auto"}
          id={id}
          title={title}
          category={category}
          image={image}
          price={price}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
