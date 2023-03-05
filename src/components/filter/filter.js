import './Filter.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../products/product';




function Filter() {
    let userid = window.localStorage.userid;

    const [prods, setprods] = useState([]);
    let [fprods, setfprods] = useState([]);
    let { Filt } = useParams()


    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/category/${Filt}`)
            .then((res) => res.json())
            .then((json) => setfprods(json))
    }, [Filt])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => setprods(json))
    }, [])


    return (

        <>

            <div className="fff">
                <div className='filter'>
                    {
                        prods.map((el) => {
                            return (
                                <Link key={el} to={`/user/${el}`}  >{el}</Link>
                            )
                        })
                    }
                    <Link to={`/user/`}  >All</Link>

                </div>

                <h2>Our {Filt} products </h2>

                <div className="container">

                    {fprods.map((el) => {
                        return (
                            <Product key={el.id} product={el} />

                        )
                    })}
                </div>
            </div >
        </>
    )
}
export default Filter;

