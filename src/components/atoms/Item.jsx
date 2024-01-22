import { useNavigate } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext"
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"


const Item = () => {

    const {load}  = useContext(ProductContext)
    const {products} = useContext(SearchContext)
    
    const navigate = useNavigate()

    const abrirDetalle = (id) => {
      navigate(`/detail/${id}`)
    }
    

    if (load) {
        return ( 
          <h3>cargando...</h3>
        )
      }

    return (
      <>
        <div>
          { products.map(item => (
            <div onClick={()=> abrirDetalle(item.id)} key={item.id}>
              <div>
                <div>
                  <img src={item.imgUrl} alt={`${item.model}`}/>
                </div>
                <div>
                  <h5>{item.brand} {item.model}</h5>
                  <p>Precio: {item.price}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </>
    )

}

export default Item