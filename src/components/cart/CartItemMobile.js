import React from "react";
import CartQuantity from "./CartQuantity";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const CartItemMobile = ({ item }) => {
  const { id, image, title, category, price, itemQuantity } = item;
  
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const increaseQty = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        category,
        image,
        price
      })
    )
  }

  const decreaseQty = () => {
    dispatch(
      cartActions.removeItem(id)
    );
  }

  const stock = JSON.parse(localStorage.getItem("stock")).find((item) => item.id === id);

  const priceCount = price * itemQuantity;
  return (
    <section className="border p-3 full-mobile">
      <div className="">
        <Button variant="danger" className="delete-mobile" onClick={deleteItem}>
          x
        </Button>
        {/* <div className="cart-quantity">
              <CartQuantity 
                itemQuantity={itemQuantity} 
                increase={increaseQty}
                decrease={decreaseQty}
              />
              </div> */}
        <div className="d-flex gap-5 container-xxl">
          <img
            src={image}
            alt="img-product"
            id="img-product"
            className="w-24 h-24 bg-white"
          />
          <div className="product-info">
            <p className="product-name">{title}</p>
            <p className="category">{category}</p>
            <div className="d-flex cart-price mx-auto">
              <p className="d-flex gap-2 price">${priceCount}</p>
              {/* <div className="cart-quantity">
              <CartQuantity 
                itemQuantity={itemQuantity} 
                increase={increaseQty}
                decrease={decreaseQty}
              />
              </div> */}
            </div>
          </div>
        </div>
         <div className="cart-quantity">
              <CartQuantity 
                itemQuantity={itemQuantity} 
                increase={increaseQty}
                decrease={decreaseQty}
              />
              </div>
        <hr className="hr"/>
        {stock.qty < itemQuantity ? (
          <p className="text-note">Note : {" "} 
            <span style={{color: "red", background: "rgb(254 226 226)"}}> 
            {" "} The number of orders exceeds the available stock!
            </span>
          </p>
        ) : (
          <p className="text-note">Note : -</p>
        )}
    
      </div>
    </section>
  );
};

export default CartItemMobile;
