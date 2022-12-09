import React from "react";
import CartItemDesktop from "../../components/cart/CartItemDesktop";
import { Container } from "react-bootstrap";
import CartItemMobile from "../../components/cart/CartItemMobile";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "../../hooks/useMediaQuery";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const isMd = useMediaQuery(796);
  return (
    <><Container>
      <img src="/banner-cart.png" className="w-full banner-top"/>
      {cartItems.length === 0 ? (
        <>
          <hr />
          <h5 className="text-center">Your cart is empty</h5>
        </>
      ) : (
        <section className="d-flex flex-column gap-3 cart-sec">
          {isMd == true ? (
            <div className="for-mobile">
              {cartItems.map((item) => (
                <CartItemMobile item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="for-desktop-view">
              {cartItems.map((item) => (
                <div>
                  <CartItemDesktop item={item} key={item.id} />
                  <hr />
                </div>
              ))}
              <hr />
            </div>
          )}
        </section>
      )}
    </Container></>
  );
};

export default CartPage;
