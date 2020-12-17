import React, {useState, Component } from 'react';
import ItemCounter from './itemCounter/ItemCounter'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import {ItemDetailButton} from './ItemDetailButton';
import useCartContext from '../context/UseCartContext'
const ItemDetail = ({product}) => {
    const [counter, setCounter] = useState(0)
    const {cant,producto,AddCart}=useCartContext()
    
    const ShowConsole =(value)=>{
      console.log(value)
      setCounter(() => value)
    }
    
    
    
    
    
    
    console.log('itemdetail:id:'+product.id)
        
        return ( 
                          
                            <div className="container py-5">
                                {/*title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>
                                        {product.name}
                                    </h1>
                                    </div>
                                </div>
                                 {/* end of title */}
                                 
                                 {/* product info */}
                                    <div className = "row">
                                    <div className = "col-10 mx-auto col-md-6 my-3">
                                    <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${product.img}.jpg`} className ="img-fluid" alt="product"/>
                                    </div> 
                                {/* product text */}
                                    <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>model : {product.name}</h2>
                                        <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                                            Stock : <span className = "text-uppercase">{product.stock}</span>
                                        </h4>
                                        <h4 className = "text-blue">
                                            <strong>
                                                price : <span>$</span>{product.price}
                                            </strong>
                                        </h4>
                                        <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product :
                                            <p className = "text-muted lead">
                                            {product.description}
                                            </p>


                                            <h3 className="text-left"><strong>Cant:</strong>{<ItemCounter initial={0} min={product.min} max={product.stock} onAdd={ShowConsole} />}</h3>
                                            <br/>
                                            <div>
               {/* for buttons */}
               <Link to = '/'>
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                                </Link>
                                                <ItemDetailButton inCart={product.inCart}/>
                                            
                                         
                                            </div>
                                        </p>

                                        </div>  
                                    </div>
                                 {/* end of product info */}



                            </div>
                        );

                    
          
        
    }

export default ItemDetail
