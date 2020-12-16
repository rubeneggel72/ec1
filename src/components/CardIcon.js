import React from 'react'
import useCartContext from "../context/UseCartContext"
import { Link } from 'react-router-dom'

const CardIcon = () => {
    const { cart, totalPrice } = useCartContext()
    if (cart.length == 0) {
        return (
            <Link to='/cart' className="ml-auto">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    -Mi Compra
                    </span>
                </button>
            </Link>
        )
    }
    else {
        return (
            <Link to='/cart' className="ml-auto">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                    <span className="mr-2">
                        Mi Compra
                <i className="fas fa-cart-plus px-2" />
                        {cart.length} ítem{cart.length > 1 ? 's' : ''} = $ {totalPrice}
                    </span>
                </button>
            </Link>
        )
    }
}
export default CardIcon

