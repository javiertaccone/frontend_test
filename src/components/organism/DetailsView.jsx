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
    const { setItem, verifyExpiration } = useLocalStorage(`Detail_${id}`)

    useEffect(() =>{
      const fetchData = async () => {
        await verifyExpiration(`Detail_${id}Expiration`)
    
        if (localStorage.getItem(`Detail_${id}Expiration`) === "false" ||
            localStorage.getItem(`Detail_${id}Expiration`) === null ) {
            console.log(`Detail${id} - API`)
            axios.get(`${API_URL}api/product/${id}`)
            .then((data) => {
              setProductDetail(data.data)
              setItem(data.data)
            })
            .catch((error) => {
                console.error("peticion fallida", error)
            })
        } else {
            console.log(`Detail${id} - Storage`)
            const data = JSON.parse(localStorage.getItem(`Detail_${id}`))
            setProductDetail(data.value)
        }

        }
      fetchData()
    }, [id])

    return (
      <div className="view">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                {productDetil && <Image product={productDetil}/>}
            </div>
            <div className="col-md-6">
              {productDetil && <Descriptions product={productDetil}/>}
              {productDetil && <Actions product={productDetil}/>}
            </div>
          </div>
        </div>
      </div>
    )
}

export default DetailsView