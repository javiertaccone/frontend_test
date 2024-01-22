import axios from "axios"
import { API_URL } from "../../constants/env" 

const Add = ({ selectColor, selectMemory , product }) => {

    const sendData = () => {
        axios.post(`${API_URL}api/cart`,{
            id: product.id,
            colorCode: selectColor,
            storageCode: selectMemory,
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
        })
    }

    return (
        <button onClick={sendData}>Agregar</button>
    )

}

export default Add