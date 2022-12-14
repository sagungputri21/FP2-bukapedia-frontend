import React, { useEffect } from "react";
import "../../styles/detail-product-style.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../features/products/productDetailSlice";
import { cartActions } from "../../features/cart/cartSlice";
import AddButton from "../../components/button/AddtoCardButton";
import useMediaQuery from "../../hooks/useMediaQuery";

const ProductDetailSection = ({ product }) => {

  return (
      <section className="container-xxl mt-20 full-wrap-detail">
        <div className="d-flex product-left">
          <img
            src={product?.image}
            alt={product?.title}
            style={{ height: "320px" }}
            className="image-detail"
          />
          <section className="left-section">
            <h2 className="text-title">{product?.title}</h2>
            <hr />
            <p>{product.dataStocks?.qty}</p>
            <h5>Price: ${product?.price}</h5>
            <div className="d-flex">
                <h5>Rate: {product.rating?.rate}/{product.rating?.count} </h5>
                <img className="star_image" src="/icons/star.png" />
            </div>
            
            <h6 className="mt-3">Description : </h6>
            <p>{product.description}</p>
            <AddButton
              extraStyle={"mx-auto px-auto"}
              id={product?.id}
              title={product?.title}
              category={product?.category}
              image={product?.image}
              price={product?.price}
            />
          </section>
        </div>
      </section>
  );
};

export default ProductDetailSection;
