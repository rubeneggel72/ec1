import React from 'react';
import Title from '../components/Title';
import CartColumns from "../components/CartColumns";
import EmptyCart from "../components/EmptyCart";
import CartItem from '../components/CartItem';
import CartTotals from '../components/CartTotals';
import useCartContext from "../context/UseCartContext"

const Cart = () => {
    const { totalPrice } = useCartContext()
    if (totalPrice > 0) {
        return (
            <div>
                <br /><br /><br />
                <Title name="Su Carrito" title="de compras" />
                <CartColumns />
                <CartItem />
                <CartTotals />
            </div>
        )
    }
    else {
        return (
            <div>
                <br /><br /><br />
                <EmptyCart />
            </div>
        )
    }
}

export default Cart


