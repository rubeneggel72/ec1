import React from 'react';

const CartColumns = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Imagen</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Producto</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Precio Unit.</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Cantidad</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Eliminar</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 border border-dark">
                    <p className="text-uppercase">Precio Item</p>
                </div>
            </div>
        </div>
    )
}
export default CartColumns