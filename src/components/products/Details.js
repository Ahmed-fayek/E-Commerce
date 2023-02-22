import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Details() {
    const prams = useParams();

    const [product, setProduct] = useState({})
    const ApiUrl = `http://localhost:9000/product/${prams.prodid}`
    useEffect(() => {
        fetch(ApiUrl)
            .then((res) => res.json())
            .then((json) => setProduct(json))
    }, [])
    return (
        <>
            <img height={"400px"} src={product.image} className="card-img-top" width={"400px"} alt="..." />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text" >HHHHHHHHHHHHHHHHHHH {product.description}</p>
            <Link className="btn btn-primary" to={'/user/'}>Get back</Link>
        </>
    )
}
export default Details;