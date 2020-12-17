import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase'

import Spinner from '../components/spinner/Spinner'
import ItemList from '../components/ItemList'
import Product from "./Item";
import Title from "./Title";
import FilterBar from "../components/FilterBar"
const Home = () =>{

const [products, setProducts] = useState();
  useEffect(() => {
    
    
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    const filtrarPorStock = itemCollection.where("stock", ">", 1)
        // const idItem = itemCollection.doc("nqYxwipNG16h9ScPXBvo");
    // Pedimos los datos
    filtrarPorStock.get().then((response) => {
      // console.log(response.data())
    const aux = response.docs.map(element => {
       console.log("elem.:"+element.data(1))
      return element.data();
    });

    // Guardamos los datos en estado
    setProducts(aux);
    console.log(' productos aaa '+products)
    });
  }, []);
    return (   
      <div>
      <FilterBar mod={"home"}/>
        {products ? (
        
          <div>
        
            {<ItemList products={products}/>}
            </div>):(
        <div><br/><br/><br/><br/>
        <Spinner/>
        <h2>Cargando....</h2></div>
        
        
         ) }
        </div>
        )        
        }
export default Home 