import React,{useState}from 'react'
import './ItemCounter.css'

const ItemCounter=({initial,min,max,onAdd})=>{
   const [counter, setCounter]=useState(initial)
   var min=parseInt(min)
   var max=parseInt(max)
   var initial=parseInt(initial)
     
     
      const decrement=() =>{ (counter>min)?
         setCounter(counter-min):setCounter(counter)
         onAdd(counter-min)}
      const increment=() =>{ (counter<max)?
         setCounter(counter+min):setCounter(counter)
         onAdd(counter+min)}
   return(  
      <div id="ItemCounter">
         <div className="col-lg-12 mt-3">
					<button className="btn btn-primary btn-lg"onClick={decrement}>-</button>
					<input className="btn btn-outline-primary btn-lg" value={counter} type="number"/>
					<button className="btn btn-primary btn-lg"onClick={increment}>+</button>
			</div>
      </div>    
   )
 }
 export default ItemCounter
