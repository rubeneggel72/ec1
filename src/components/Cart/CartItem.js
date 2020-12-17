import React from 'react';
import useCartContext from "../../context/UseCartContext"
const CartItem=()=>{
    const {cart,totalPrice}=useCartContext()
    return (
        <div className="container-fluid">
        {cart.map((cart,idx)=>{
        {console.log("return"+cart.name+"key "+idx)}
            return (
            <div className="row my-8 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
            <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${cart.img}.jpg`} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {cart.name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price : </span>
            {cart.price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
            </div>
            <span className="d-lg-none">price : </span>
            {cart.qty} x {cart.unit}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" >
            <i className="fas fa-trash"  onClick={()=>CartRemmove(idx)}></i>
        </div>

        </div> 
        <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {cart.price*cart.qty} </strong>

      </div>
      </div>
        
    )              
})}

</div>  
    )
}
export default CartItem