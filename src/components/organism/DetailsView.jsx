import Image from "../atoms/Image"
import Actions from "../molecules/Actions"
import Descriptions from "../atoms/Descriptions"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../constants/env" 
import { useState, useEffect } from "react"
import { useLocalStorage } from "../../storage/useLocalStorage"
 
const DetailsView = () => {
    
    const { id }= useParams()
    const [productDetil, setProductDetail] = useState(null)
    const { setItem, verifyExpiration } = useLocalStorage("Detail")


    useEffect(() =>{
      const fetchData = async () => {
        await verifyExpiration("DetailExpiration")
    
        if (localStorage.getItem("DetailExpiration") === "false" ||
            localStorage.getItem("DetailExpiration") === null ) {
            console.log("Detail - API")
            axios.get(`${API_URL}api/product/${id}`)
            .then((data) => {
              setProductDetail(data.data)
              setItem(data.data)
            })
            .catch((error) => {
                console.error("peticion fallida", error)
            })
        } else {
            console.log("Detail - Storage")
            const data = JSON.parse(localStorage.getItem("Detail"))
            setProductDetail(data.value)
        }


        }
      fetchData()
    }, [id])






    return (
      <>
        {productDetil && <Image product={productDetil}/>}
        {productDetil && <Descriptions product={productDetil}/>}
        {productDetil && <Actions product={productDetil}/>}
      </>
    )

}

export default DetailsView