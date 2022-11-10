import React from "react";
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";
import '../../styles/main-page.css'

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="object-wrap">
        <h5 className="category-title">Shop by category</h5>
        <hr/>
        <div className="flex-item d-flex">
          {data.slice(0, 4).map((data) => (
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
    </section>
  );
};

export default CategorySection;
