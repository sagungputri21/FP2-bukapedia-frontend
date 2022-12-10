import React, { useEffect } from "react";
import "../../styles/main-page.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, setData } from "../../features/products/productDetailSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productDetail.product);
  // const loading = useSelector((state) => state.products.loading);

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
          <img src={product?.image} alt={product?.title} />
          <p>{product.dataStocks?.qty}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
