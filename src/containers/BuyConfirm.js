import React,{Fragment, useState} from 'react'
import Title from "../components/Title";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import useCartContext from "../context/UseCartContext"
import { getFirestore } from '../firebase'
const BuyConfirm=()=>{
    const {cart,totalPrice } = useCartContext()
    const [buyer, setBuyer] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        cp: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setBuyer({
            ...setBuyer,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + buyer.name + ' ' + buyer.lastname)
        let venta= {buyer:buyer,cart:cart,totalPrice:totalPrice}
        
        const db = getFirestore();
        db.collection("Ventas").add(venta).then(({id})=>{
            alert("Compra Realizada!!! Id:"+id);
        }).catch(error=>{
            alert("fallo esto:"+error);
        })
    }
       
return ( <Fragment>
<ModalContainer>
    <div className="container">
        <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                <h5>
                   Orden de compra
                </h5>
                Precio total : $ {totalPrice}
           
                    <form className="form-group" onSubmit={enviarDatos}>
               
    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre y Apellido" onChange={handleInputChange} name="name"/>
   

   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono" onChange={handleInputChange} name="phone"/>


    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} name="email"/>
   

   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Dirección" onChange={handleInputChange} name="address"/>
    

    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ciudad" onChange={handleInputChange} name="city"/>
   
    
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Código Postal"onChange={handleInputChange} name="cp"/>
    
    <button type="submit" className="btn btn-primary">Enviar</button>
  
  
  </form>
  </div>
    </div>
    </div>
    </ModalContainer>
    </Fragment>
    );
    
        }
    export default BuyConfirm
    
    const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    
    }
    
    
    
    `;