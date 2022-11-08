import React from "react";
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";

const Home = () => {
  return (
    <section>
      <div>
        {data.map((data) => (
          <ProductCard
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
