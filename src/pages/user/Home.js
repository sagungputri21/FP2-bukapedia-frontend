import React, { useEffect } from 'react';
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";
import '../../styles/main-page.css'
import CategorySection from "../../components/sections/CategorySection";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setStock } from '../../features/products/productsSlice';

const Home = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.products);
  // const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProducts(), setStock);
  }, [dispatch]);
  console.log('data=> ', allProducts)

  return (
    <div className="full-section">
      <img src="/top-banner.png" className="w-full banner"/>
    <div className="container-xxl">
    <div className="product_home_section">
      <CategorySection />
      <section className="container-xxl all-products mt-20">
        <h2 className="text-all">All of Our Products</h2>
        <hr/>
        <div  className="flex-item">
        {allProducts?.map((data) => (
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
      </section>
    </div>
    </div>
    </div>
  );
};

export default Home;
