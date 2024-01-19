import { ProductContext } from "../../context/ProductContext"
import { useContext } from "react"


const Item = () => {

    const {load}  = useContext(ProductContext)
    const {product} = useContext(ProductContext)
    
    if (load) {
        return ( 
          <h3>cargando...</h3>
        )
      }

    return (
      <>
        <div>
          { product.map(item => (
            <div key={item.id}>
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