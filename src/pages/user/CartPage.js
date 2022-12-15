import React from "react";
import CartItemDesktop from "../../components/cart/CartItemDesktop";
import { Container } from "react-bootstrap";
import CartItemMobile from "../../components/cart/CartItemMobile";
import { useSelector } from "react-redux";
import useMediaQuery from "../../hooks/useMediaQuery";
import CheckoutFull from "../../components/sections/CheckoutMobileFull";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const CartPage = ({
    id,
    title,
    category,
    image,
    price,
    itemQuantity,
    priceCount,
    isCheckout
  }) => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const checkoutData = () => {
    dispatch(
      cartActions.checkoutCart({
        id,
        title,
        category,
        image,
        price,
        itemQuantity,
        priceCount,
        isCheckout
      })
    );
  };

  const isMd = useMediaQuery(1000);

  return (
    <>
    <div className="header mt-0">
        <section className="cart-header d-flex gap-4">
          <img src="/icons/grocery-store.png"/>
          <h2 className="header-h2 my-auto">My Cart</h2>
        </section>
    </div>
    <Container>
      {cartItems.length === 0 ? (
        <>
          <hr />
          <h5 className="text-center mt-5">Your cart is empty</h5>
        </>
      ) : (
        <section className="d-flex flex-column gap-3 cart-sec mt-5">
          <p className="py-0 result">Result : {`${cartItems.length <= 1 ? `${cartItems.length} item` : `${cartItems.length} items`}`}</p>
          <hr className="mt-0"/>
          {isMd == true ? (
            <div className="for-mobile mt-3">
              {cartItems.map((item) => (
                <CartItemMobile item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="for-desktop-view mt-3">
              {cartItems.map((item) => (
                <div>
                  <CartItemDesktop item={item} key={item.id} />
                  <hr />
                </div>
              ))}
              <section>
                <CheckoutFull onClick={checkoutData}/>
              </section>
            </div>
          )}
        </section>
      )}
    </Container></>
  );
};

export default CartPage;
