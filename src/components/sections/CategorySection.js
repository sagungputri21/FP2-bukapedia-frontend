import React, { useEffect, useState } from "react";
import { category } from "../../data/categoryData";
import { data } from "../../data/dummyData";
import ProductCard from "../../components/cards/ProductCard";
import '../../styles/category-section.css'
import CategoryCard from "../cards/CategoryCard";

const CategorySection = ({allProducts}) => {
    const [products, setProducts] = useState([]);

    const data = allProducts?.filter((data) => data.category === category.title)

    const fitCategory = async () => {
      const dataCategory = await data;
      setProducts(dataCategory);
    }

    useEffect(() => {
      fitCategory()
    }, []);

    console.log('result :', data)

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
                onClick={fitCategory}
            />
          ))}
        </div>
        <div>
            {products.map((data) => (
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
