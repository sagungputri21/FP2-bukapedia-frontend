import React from "react";
import "../../styles/category-section.css";
import { Card } from "react-bootstrap";

const CategoryCard = ({ image, name, onClick }) => {
  return (
    <Card className="category_card" onClick={onClick}>
      <div className="image-name d-flex gap-10">
        <img src={image} className="image"/>
        <h5>{name}</h5>
      </div>
    </Card>
  );
};

export default CategoryCard;
