import React, { useState } from 'react';
import ItemCounter from './ItemCounter'
import { Link } from 'react-router-dom';
import useCartContext from '../context/UseCartContext'
const ItemDetail = ({ product }) => {
    const [counter, setCounter] = useState(0)
    const { AddCart, cart } = useCartContext()
    cart.map((cart) => {
        cart.id == product.id ?
            product.inCart = true : product.inCart = false
    })
    const ShowConsole = (value) => {
        console.log(value)
        setCounter(() => value)
    }
    console.log('Product INCART:' + product.inCart)
    return (
        <div className="container ">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${product.img}.jpg`} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Producto : {product.name}</h2>
                    <h4 className="text-blue">
                        <strong>
                            price : <span>$</span>{product.price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Descripción :
                    <p className="text-muted lead">
                            {product.description}
                        </p>
                        <h5 className="text-blue">
                            <strong>
                                Disponible: <span className="text-uppercase">{product.stock} {product.unit}</span>
                            </strong>
                        </h5>

                        <h3 className="text-left"><strong>Cant:</strong>{<ItemCounter initial={0} min={product.min} max={product.stock} onAdd={ShowConsole} />}</h3>
                        <br />
                        <div>
                            {/* for buttons */}
                            <Link to='/'>
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                                    <span className="mr-2">
                                        back to product
                                    </span>
                                </button>
                            </Link>
                            {product.inCart

                                ? (<Link to='/cart'><button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                                    <span className="mr-2"> <span className="mr-2"></span>In Cart</span> </button></Link>)
                                : (<button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => AddCart(counter, product)}><span className="mr-2">Add to Cart</span>
                                </button>)
                            }
                        </div>
                    </p>

                </div>
            </div>

        </div>
    );
}
export default ItemDetail
