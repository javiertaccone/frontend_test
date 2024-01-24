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
        <div className="grid row col-11 col-md-11 mx-auto">
          {products.map(item => (
            <div key={item.id} className="row col-11 col-md-3 mx-auto">
              <div onClick={() => abrirDetalle(item.id)} className="productContainer row g-0 col-10 col-md-9 mx-auto">
                <div className="text-center">
                  <img className="productImg" src={item.imgUrl} alt={`${item.model}`} />
                </div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-11 col-md-11">
                      <h4 className="model text-center">{item.model}</h4>
                      <div className="row col-11 col-md-9 mx-auto">
                        <div className="col-6">
                          <h5 className="brand">{item.brand}</h5>
                        </div>
                        <div className="col-6 ">
                          <p className="price text-center">{item.price}€ </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )

}

export default Item