import { useContext, useState } from 'react';
import { useEffect } from 'react';
import './cards.css'
import Product from './product';
import Filter from '../filter/filter';
import { Productcontext } from '../services/productsContext';
function Cards() {

    const prod = useContext(Productcontext)
    return (
        <div key={prod.id} >
            <div id='categoty'>
                <Filter />
            </div>
            <div id='all-products' className="prods-containerr">
                {prod.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}
export default Cards;