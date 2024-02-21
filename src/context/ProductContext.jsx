import { createContext, useEffect, useState } from "react";
import { API_URL } from "../constants/env";
import axios from "axios";
import { useLocalStorage } from "../storage/useLocalStorage";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const { getItem, setItem } = useLocalStorage("Products");

    const loadProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}api/product`);
            const data = response.data;
            setItem(data);
            return data;
        } catch (error) {
            console.error("Petición fallida", error);
            return null;
        }
    };

    const fetchData = async () => {
        try {
            const storedData = getItem();
            if (storedData && !storedData.expired) {
                setProduct(storedData.value);
            } else {
                const newData = await loadProducts();
                if (newData) {
                    setProduct(newData);
                }
            }
            setLoad(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={{ product, load }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductContextProvider };
