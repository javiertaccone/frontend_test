import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const { addProducts } = useContext(CartContext)
    
    return (
        <h4>{addProducts}Productos añadidos</h4>
    )

}

export default Cart