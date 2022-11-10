import React, { useState } from "react";
import { category } from "../../data/categoryData";
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";
import '../../styles/category-section.css'
import CategoryCard from "../cards/CategoryCard";

const CategorySection = () => {
    // const [category, setCategory] = useState([])
    
    // const fitCategory = () => {
    // //   const data = {${data.category} === {category.name} ? setCategory()}
    // }
  return (
    <section className="category-section">
      <div className="object-wrap">
        <h5 className="category-title">Shop by category</h5>
        <hr/>
        <div className="flex-item d-flex">
          {category.map((data) => (
            <CategoryCard 
                image={data.imgUrl}
                name={data.title}
                // onClick={fitCategory}
            />
          ))}
        </div>
        <div>
            {/* {data.map((data) => (
            <ProductCard
              id={data?.id}
              image={data?.image}
              title={data?.title}
              price={data?.price}
              rate={data.rating?.rate}
              count={data.rating?.count}
              category={data?.category}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
