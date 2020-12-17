import React from 'react';
import useCartContext from "../context/UseCartContext"

import { Link } from "react-router-dom";   
const CartTotals = () => {
    

    const { totalPrice, CleanCart,cart } = useCartContext()

   
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => CleanCart()}>
                        Limpiar Carro de compras
                    </button>

                    <h5>
                        <span className="text-blue">subtotal : </span>
                        <strong>$ {totalPrice}</strong>
                    </h5>
                    <h5>
                        <span className="text-blue">Gastos de envío: </span>
                        <strong>$ {totalPrice * 0.2}</strong>
                    </h5>
                    <h5>
                        <span className="text-blue">total : </span>
                        <strong>$ {totalPrice + 0.2*totalPrice}</strong>
                    </h5>
                    <Link to='/buyconfirm'>
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" >
                        Confirmar Compra
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default CartTotals