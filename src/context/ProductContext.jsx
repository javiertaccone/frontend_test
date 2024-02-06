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
        const data = JSON.parse(localStorage.getItem("Products"));
        if (data) {
          setProduct(data.value);
          setLoad(false);
        } else {
          fetchData();
        }
    }, []);
  
    const fetchData = async () => {
      await verifyExpiration("ProductsExpiration");
  
      if (!localStorage.getItem("ProductsExpiration") ||
      localStorage.getItem("ProductsExpiration") === "false") {
        axios
          .get(`${API_URL}api/product`)
          .then((data) => {
            setProduct(data.data);
            setLoad(false);
            setItem(data.data);
          })
          .catch((error) => {
            console.error("peticion fallida", error);
          });
      } else {
        const data = JSON.parse(localStorage.getItem("Products"));
        setProduct(data.value);
        setLoad(false);
      }
    };

    return (
        <ProductContext.Provider value={{ product , load }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext , ProductContextProvider}
