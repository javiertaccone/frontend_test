const Descriptions = ( { product }) => {
    
    return (
      <div className="containdetail">
        <p className="detail"><strong>Marca : </strong>{product.brand}</p>
        <p className="detail"><strong>Modelo : </strong>{product.model}</p>
        <p className="detail"><strong>Precio : </strong>{product.price}</p>
        <p className="detail"><strong>Cpu : </strong>{product.cpu}</p>
        <p className="detail"><strong>Ram : </strong>{product.ram}</p>
        <p className="detail"><strong>Os : </strong>{product.os}</p>
        <p className="detail"><strong>Display : </strong>{product.displayResolution}</p>
        <p className="detail"><strong>Bateria : </strong>{product.battery}</p>
        <p className="detail"><strong>Camara 1 : </strong>{product.primaryCamera}</p>
        <p className="detail"><strong>Camara 2 : </strong>{product.secondaryCmera}</p>
        <p className="detail"><strong>Dimensiones : </strong>{product.dimentions}</p>
        <p className="detail"><strong>Peso : </strong>{product.weight}</p>
      </div>
    )

}

export default Descriptions