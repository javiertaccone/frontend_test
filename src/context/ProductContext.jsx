import { createContext, useEffect, useState } from "react"
import { API_URL } from "../constants/env"
import axios from "axios"

const ProductContext = createContext()

const ProductContextProvider = ( {children} ) => {
    const [product, setProduct] = useState([])
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        axios.get(`${API_URL}api/product`)
            .then((data) => {
                setProduct(data.data)
                setLoad(false)
            })
            .catch((error) => {
                console.error("peticion fallida", error)
            })
    },[])

    return (
        <ProductContext.Provider value={{ product , load}}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext , ProductContextProvider}
