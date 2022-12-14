import React from "react";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap";
import { cartActions } from "../../features/cart/cartSlice";

const ProductCard = ({ image, id, title, price, rate, count, category}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        category,
        image,
        price,
      })
    )
    console.log("succes add to cart")
  }

  return (
    <Card className="product_item">
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
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
          <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
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
          </div>
        </div>
      </Link>
      <div className="add-cart-button">
      <Button 
              extraStyle={'w-full px-10 py-2'} 
              className="btn-add mx-auto px-auto"
              onClick={addToCart}
            >
              Add to cart
            </Button>
            </div>
    </Card>
  );
};

export default ProductCard;
