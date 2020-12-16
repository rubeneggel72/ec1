import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Item = ({ id, item }) => {

  return (
    <ProductWrapper className="col-9 mx-auto " >
      <div className="card">
        <div className="img-container p-5" >
          <Link to={`/detail/${item.id}`}>
            <img src={`https://raw.githubusercontent.com/rubeneggel72/ecommerce/master/src/img/${item.img}.jpg`} alt="product image" className="card-img-top" />
          </Link>
          {item.inCart ? (
            <Link to={`/cart`}>
              <button className="card-btn" >
                <p className="text-capitalize mb-0" disabled>
                  {""}
                YA FUE AGREGADO A <i className="fas fa-cart-plus" />
                </p>
              </button>
            </Link>
          ) : (
              <>
              </>
            )}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">
            {item.name}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {item.price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}
export default Item

const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition:all 1s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;

}
&hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.02);
  }
  .card-footer{
    background: rgba(247,247,247);

  }
}
.img-container{
  position: relative;
  overflow: hidden;

}
.card-img-top{
  transition: all 1s linear;

}
.img-container:hover .card-img-top{
  transform: scale(1.5);

}
.card-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.8rem 0 0 0;
  transform: translate(100%,100%);
  transition: all 1s linear;
}
.img-container:hover .card-btn{
  transform: translate(0%,0%);
  
}
.card-btn: hover{
  color: var(--mainBlue);
  cursor:pointer;
 }
`;
