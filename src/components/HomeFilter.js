import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import ItemList from '../components/ItemList'

import FilterBar from "../components/FilterBar"
const HomeFilter = () => {
  const { filter } = useParams()
  const [products, setProducts] = useState();

  useEffect(() => {
    console.log("filter " + filter)
    
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const filtrarPorStock = itemCollection.where('group', "==", filter).limit(3)

    filtrarPorStock.get().then((response) => {
      const aux = response.docs.map(element => {
        console.log("elem.:" + element.data(1))
        return element.data();
      });
      setProducts(aux);
      console.log(' productos bbb ' + products + " filter:" + filter)
    });
  }, []);
  return (

    <div>
      <FilterBar mod={"HomeFilter"} />
      {products ? (
        <div>
          {<ItemList products={products} />}
        </div>) : (
          <div><br /><br /><br /><br />
            <Spinner />
            <h2>....Cargando....</h2></div>
        )}
    </div>
  )
}
export default HomeFilter 