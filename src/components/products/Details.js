import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Details() {
    const prams = useParams();
    let product = {};
    const products = useContext(Productcontext);
    products.map((el) => {
        if (el.id === prams) {
            product = el;
        }
    })
    return (
        <>
            <img height={"400px"} src={product.image} className="card-img-top" width={"400px"} alt="..." />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text" > {product.description}</p>
            <Link className="btn btn-primary" to={'/user/'}>Get back</Link>
        </>
    )
}
export default Details;