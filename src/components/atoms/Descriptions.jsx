const Descriptions = ( { product }) => {
    
    return (
        <>
        <p className="detail">Marca: {product.brand}</p>
        <p className="detail">Modelo: {product.model}</p>
        <p className="detail">Precio: {product.price}</p>
        <p className="detail">Cpu: {product.cpu}</p>
        <p className="detail">Ram: {product.ram}</p>
        <p className="detail">Os: {product.os}</p>
        <p className="detail">Display: {product.displayResolution}</p>
        <p className="detail">Bateria: {product.battery}</p>
        <p className="detail">Camara 1: {product.primaryCamera}</p>
        <p className="detail">Camara 2: {product.secondaryCmera}</p>
        <p className="detail">Dimensiones: {product.dimentions}</p>
        <p className="detail">Peso: {product.weight}</p>
      </>
    )

}

export default Descriptions