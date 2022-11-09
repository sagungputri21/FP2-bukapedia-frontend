import React from "react";
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";
import '../../styles/main-page.css'
const Home = () => {
  return (
    <section>
      <div className="flex-item d-flex">
        {data.map((data) => (
          <ProductCard
            id={data?.id}
            image={data?.image}
            title={data?.title}
            price={data?.price}
            rate={data.rating?.rate}
            count={data.rating?.count}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
