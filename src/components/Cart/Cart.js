import React from 'react';
import Title from '../Title';
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";

import CartItem from './CartItem';
import CartTotals from './CartTotals';
import useCartContext from "../../context/UseCartContext"
const Cart = () =>{
const {cart,totalPrice}=useCartContext()





      
                       
                            
    if(totalPrice > 0){
        return (
            <div>
            <Title name="your" title="cart" />
            <CartColumns />
            <CartItem />
            <CartTotals />
            </div>
            )}
    else{
        return (
            <EmptyCart />
            )}
}
                        
export default Cart            
        

