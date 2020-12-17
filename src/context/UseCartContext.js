import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cant] = useState("")
    const [producto] = useState({ name: "", price: 120 })
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const  total=()=>{
        var value = 0
        cart.map((cart) => {
            value = value + cart.priceItem
            console.log("value Remove" + value)
            
    })
    setTotalPrice(value)
    }


    const AddCart = (counter, product) => {
        const newCart = cart
        var value = 0
        cart.map((cart) => {
            if (cart.name === product.name) {
                value = value + 1
                cart.qty = cart.qty + counter
            }
        })
        if (value === 0 && counter > 0) {
            product.qty = counter
            product.priceItem = product.price * product.qty
            newCart.push(product)
            setCart([...newCart])
        }
        total()

    }


    const RemoveCart = (idx) => {
        const newCart = cart
        newCart.splice(idx, 1)
        setCart([...newCart])
        total()
           

    }

    const CleanCart = () => {
        setCart([])
        total()
    }

    return (
        <CartContext.Provider value={{ cant, producto, AddCart, cart, totalPrice, RemoveCart, CleanCart }}>
            {children}
        </CartContext.Provider>)
}
export default useCartContext