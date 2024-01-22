import Image from "../atoms/Image"
import Actions from "../molecules/Actions"
import Descriptions from "../atoms/Descriptions"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../constants/env" 
import { useState, useEffect } from "react"

const DetailsView = () => {
    
    const { id }= useParams()

    const [productDetil, setProductDetail] = useState(null)

    useEffect(() =>{
      axios.get(`${API_URL}api/product/${id}`)
      .then((data) => {
        setProductDetail(data.data)
      })
      .catch((error) => {
          console.error("peticion fallida", error)
      })
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