import React from 'react';
import useCartContext from "../context/UseCartContext"
const CartItem = () => {
    const { cart, RemoveCart } = useCartContext()
    return (
        <div className="container-fluid">
            {cart.map((cart, idx) => {
                { console.log("return" + cart.name + "key " + idx) }
                return (
                    <div className="row my-8 text-capitalize text-center border border-dark">
                        <div className="col-10 mx-auto col-lg-2 ">
                            <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${cart.img}.jpg`} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-4">
                            {cart.name}
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-4 ">
                            {cart.price}
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-4 ">
                            {cart.qty} x {cart.unit}
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-4 ">
                            <div className="cart-icon" >
                                <i className="fas fa-trash" onClick={() => RemoveCart(idx)}></i>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 my-4 ">
                            <strong> item total : $ {cart.price * cart.qty} </strong>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CartItem