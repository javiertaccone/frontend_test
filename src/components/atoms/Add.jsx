import axios from "axios"
import { API_URL } from "../../constants/env" 
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Add = ({ selectColor, selectMemory , product }) => {

    const { addNewProduct } = useContext(CartContext)

    const sendData = () => {
        axios.post(`${API_URL}api/cart`,{
            id: product.id,
            colorCode: selectColor,
            storageCode: selectMemory,
            })
            .then((response) => {
                addNewProduct(response.data.count)
            })
            .catch((error) => {
                console.error(error)
        })
    }
 
    return (
        <div className="container-button">
            <button className="button-add" onClick={sendData}>Agregar</button>
        </div>
    )
}

export default Add