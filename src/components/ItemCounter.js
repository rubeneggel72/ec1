import React, { useState } from 'react'




const ItemCounter = ({ initial, min, max, onAdd }) => {
   const [counter, setCounter] = useState(initial)
   var min = parseInt(min)
   var max = parseInt(max)
   var initial = parseInt(initial)

   const decrement = () => {
      (counter > min) ?
         setCounter(counter - min) : setCounter(counter)
      onAdd(counter - min)
   }

   const increment = () => {
      (counter < max) ?
         setCounter(counter + min) : setCounter(counter)
      onAdd(counter + min)
   }

   return (
      <div id="ItemCounter">
         <div className="col-lg-12 mt-3">
            <button className="btn btn-success text-uppercase mb-3 px-3" type="button" onClick={decrement}><i class="fas fa-minus"></i></button>
            <input className="btn btn-outline-success text-uppercase mb-3 px-2" type="button" value={counter} type="number" />
            <button className="btn btn-success text-uppercase mb-3 px-3" type="button" onClick={increment}><i class="fas fa-plus"></i></button>
         </div>
      </div>
   )
}
export default ItemCounter
