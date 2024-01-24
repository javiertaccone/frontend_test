import { createContext } from "react"
import { useState } from "react"

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [ addProducts, setAddProducts] = useState(() => {
        const cartValue = localStorage.getItem("Cart");
        return isNaN(cartValue) || cartValue === null ? 0 : parseInt(cartValue);
      })

    const addNewProduct = (e) => {
        if (localStorage.getItem("Cart") !== null){
            const data = localStorage.getItem("Cart", addProducts+e)
            setAddProducts(addProducts+e)
        }
        localStorage.setItem("Cart", addProducts+e)
        setAddProducts(addProducts+e)

    }

    return (
        <CartContext.Provider value={{ addProducts , addNewProduct }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartContextProvider } 