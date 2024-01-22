import { createContext } from "react"
import { useState } from "react"

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [ addProducts, setAddProducts] = useState(0)

    const addNewProduct = () => {
        setAddProducts(addProducts+1)
    }

    return (
        <CartContext.Provider value={{addProducts , addNewProduct}}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartContextProvider } 