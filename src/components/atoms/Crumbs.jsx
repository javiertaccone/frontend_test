import { Link, useParams } from 'react-router-dom';

const Crumbs = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
        <p>
          <Link to="/">Home</Link>
        </p>
        {id && <p>Product Details</p>}
    </>
  );
}

export default Crumbs;