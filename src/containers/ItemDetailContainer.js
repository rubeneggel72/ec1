import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import Spinner from '../components/Spinner'
import { getFirestore } from '../firebase'
const ItemDetailContainer = () => {

    const { id } = useParams()



    // useEffect(async()=>{
    //     const product=await GetProductFromDatabase(id)
    //     setProduct(product)
    //     console.log("item detail container "+ product)
    // },[])

    const [product, setProduct] = useState();
    useEffect(() => {

        // Referencia
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        // const filtrarPorStock = itemCollection.where("stock", "<", 1);

        const idItem = itemCollection.doc(id)
        // Pedimos los datos
        idItem.get().then((response) => {
            console.log(response.data())
            // const aux = response.docs.map(element => {
            //   return element.data();
            // });


            setProduct(response.data());
        });
    }, []);


    return (
        <div>
            <br /><br /><br /><br />
            {product ? (

                <div id="ItemDetailContainer item-detail">
                    <ItemDetail product={product} />
                </div>
            ) : (
                    <div><br /><br /><br /><br />
                        <Spinner />
                        <h2>Cargando....</h2></div>
                )}
        </div>
    )
}

export default ItemDetailContainer