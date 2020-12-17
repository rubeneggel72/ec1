import React from 'react';
import {Link} from 'react-router-dom';
import useCartContext from "../../context/UseCartContext"
const CartTotals=()=>{
    
    const {cart,totalPrice}=useCartContext()
    return (  
    <div className="container">
    <div className="row">
    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
<Link to ="/">
    <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
    type="button" 

    >
        clear cart 
    </button>
</Link>
<h5>
    <span className="text-title">subtotal : </span>
    <strong>$ {totalPrice}</strong>
</h5>
<h5>
    <span className="text-title">Gastos de envío: </span>
    <strong>$ {totalPrice*0.2}</strong>
</h5>
<h5>
    <span className="text-title">total : </span>
    <strong>$ {totalPrice+totalPrice}</strong>
</h5>

    </div>

    </div>
    </div>
    )
}
export default CartTotals