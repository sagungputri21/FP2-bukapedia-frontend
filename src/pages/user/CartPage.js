import React from "react";
import CartItemDesktop from "../../components/cart/CartItemDesktop";
import { Container } from "react-bootstrap";
import CartItemMobile from "../../components/cart/CartItemMobile";

const CartPage = () => {
    return (
        <Container>
        <section>
            <CartItemDesktop 
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                name={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
                category={"Men'ss Clothing"}
                price={500}
                itemQuantity={15}
            />
            <hr/>
            <CartItemDesktop 
                image={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
                name={"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}
                category={"Men's Clothing"}
                price={500}
                itemQuantity={15}
            /> 
            <CartItemMobile 
             image={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
             name={"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}
             category={"Men's Clothing"}
             price={500}
             itemQuantity={15}
             />
        </section>
        </Container>
    )
}

export default CartPage;