import { useState } from 'react';
import { useEffect } from 'react';
import './cards.css'
import Product from './product';
import Filter from '../filter/filter';
function Cards() {

    const [prod, setProd] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/product')
            .then((res) => res.json())
            .then((json) => setProd(json))
    }, [])

    return (
        <div key={prod.id} >
            <Filter />
            <div className="prods-containerr">
                {prod.map((product) => {
                    return (
                        <>
                            <Product key={product.id} product={product} />

                        </>

                    )
                })}
            </div>
        </div>
    )
}
export default Cards;