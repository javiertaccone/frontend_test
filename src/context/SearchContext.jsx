import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

const SearchContext = createContext()

const SearchContextProvider  = ({ children }) => {

    const [filter, setFilter] = useState("")
    const { product } = useContext(ProductContext)
    
    const filterProducts = product.filter((item) =>{ 
        return (
            item.brand.toLowerCase().includes(filter.toLowerCase())||
            item.model.toLowerCase().includes(filter.toLowerCase())
        )
    })
    return (
        <SearchContext.Provider value={{ products: filterProducts, setFilter }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext , SearchContextProvider}
