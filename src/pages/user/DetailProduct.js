import React, { useEffect } from "react";
import "../../styles/main-page.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../features/products/productDetailSlice";
import { cartActions } from "../../features/cart/cartSlice";
import AddButton from "../../components/button/AddtoCardButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import ProductDetailSection from "../../components/sections/ProductDetailSection"
import { getProducts } from '../../features/products/productsSlice';
import ProductCard from "../../components/cards/ProductCard";


const ProductDetail = ({ image, id, title, price, category }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productDetail.product);
  const moreProducts = useSelector((state) => state.products.products)
  // const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getDetail(productId));
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("data=> ", product);

  const isMd = useMediaQuery(750);

  return (
    <div className="container-xxl">
      <section className="container-xxl mt-20">
        {isMd == true ? (
          <section>
          <h2 className="text-all">{product?.title}</h2>
          <hr />
          <div className="product-section">
          <img src={product?.image} alt={product?.title} style={{height: '320px'}} />
            <p>{product.dataStocks?.qty}</p>
            <h4>Price: ${product?.price}</h4>
            <h4>Rate: {product.rating?.rate}</h4>
            <p>{product.description}</p>
            <AddButton 
              extraStyle={"mx-auto px-auto"}
              id={product?.id}
              title={product?.title}
              category={product?.category}
              image={product?.image}
              price={product?.price}
          />
        </div>
        </section>
        ) : (
          <ProductDetailSection 
            product={product}
          />
        )}
      </section>
      <h5 className="more-similar">Similar type you might like</h5>
      <hr  />
      <div  className="flex-item">
        {moreProducts?.filter(data => data.category == product.category ).map((data) => (
          <ProductCard
            id={data?.id}
            image={data?.image}
            title={data?.title}
            price={data?.price}
            rate={data.rating?.rate}
            count={data.rating?.count}
            category={data?.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
