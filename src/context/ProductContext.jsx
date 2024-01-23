import { createContext, useEffect, useState } from "react"
import { API_URL } from "../constants/env"
import axios from "axios" 
import { useLocalStorage } from "../storage/useLocalStorage"
 
const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [load, setLoad] = useState(true)
    const { setItem, verifyExpiration } = useLocalStorage("Products")

    useEffect(() => {
        const fetchData = async () => {
            await verifyExpiration("ProductsExpiration")

            if (localStorage.getItem("ProductsExpiration") === "false" ||
                localStorage.getItem("ProductsExpiration") === null ) {
                console.log("API")
                axios.get(`${API_URL}api/product`)
                .then((data) => {
                    setProduct(data.data)
                    setLoad(false)
                    setItem(data.data)
                })
                .catch((error) => {
                    console.error("peticion fallida", error)
                })
            } else {
                const data = JSON.parse(localStorage.getItem("Products"))
                setProduct(data.value)
                setLoad(false)
                console.log("datos consumidos del local storage")
            }
        }
        fetchData()
    },[])

    return (
        <ProductContext.Provider value={{ product , load }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext , ProductContextProvider}
