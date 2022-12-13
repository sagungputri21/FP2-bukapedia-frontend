import React, { useEffect } from "react";
import "../../styles/main-page.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, setData } from "../../features/products/productDetailSlice";
import { Button } from "react-bootstrap";
import { cartActions } from "../../features/cart/cartSlice";

const ProductDetail = ({ image, idProduct, title, price,category}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productDetail.product);
  // const loading = useSelector((state) => state.products.loading);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        idProduct,
        title,
        category,
        image,
        price,
      })
    )
    console.log("succes add to cart")
  }

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  console.log("data=> ", product);

  return (
    <div className="container-xxl">
      <section className="container-xxl mt-20">
        <h2 className="text-all">{product?.title}</h2>
        <hr />
        <div className="product-section">
          <img src={product?.image} alt={product?.title} style={{height: '320px'}} />
          <p>{product.dataStocks?.qty}</p>
          <h4>Price: ${product?.price}</h4>
          <h4>Rate: {product.rating?.rate}</h4>
          <p>{product.description}</p>
          <Button 
              extraStyle={'w-full px-10 py-2'} 
              className="btn"
              onClick={addToCart}
            >
              Add to cart
            </Button>

        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
