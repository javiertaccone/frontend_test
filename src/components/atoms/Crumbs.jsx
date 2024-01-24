import { Link, useParams } from 'react-router-dom'

const Crumbs = () => {
  const params = useParams()
  const { id } = params

  return (
      <div className="crumbs">
        <p className="crumb" key="home">
          <Link to="/">Home</Link>
        </p>
        {id && <p className="crumb" key="product-details">Product Details</p>}
      </div>
  )
}

export default Crumbs;