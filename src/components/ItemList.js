import React, { Component } from 'react';
import Item from "./Item";
import Title from "./Title";
import useCartContext from "../context/UseCartContext"

const ItemList = ({ products }) => {
    const { cart } = useCartContext()
    return (
        <div className="py-5">
            <div className="container">
                <Title name="Nuestros" title=" productos" />
                <div className="row">
                    {products.map((product, idx) => {
                        cart.map((cart, idx) => {
                            cart.id == product.id ?
                                product.inCart = true : product.inCart = false
                        })
                        return (
                            <div className="col-4 border col-item-list">
                                <Item id={idx} item={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ItemList



