const Image = ( { product }) => {

    return (
        <div className="containerimgdetail col-md-6 mx-auto">
          <img className="imgdetail" src={product.imgUrl} alt={product.model}/>
        </div>
    )
    
}

export default Image