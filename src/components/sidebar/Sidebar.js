import { useEffect, useState } from 'react';
import './Sidebar.css'
import { Routes, Route, Link, useParams } from 'react-router-dom';
function Sidebar() {
    let { userid } = useParams();
    const [prods, setprods] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => setprods(json))
    }, [])
    if (userid < 0) {
        return (<>
            <ul className="list-unstyled mylist">
                <li>
                    <Link to={`/user/${userid}`} className="btn btn-info">All Products</Link>

                </li>

            </ul>

        </>)
    } else {
        return (<>
            <ul className="list-unstyled mylist">
                <li>
                    <Link to={`/user/${userid}`} className="btn btn-info">All Products</Link>

                </li>


                <li id='admin-vis'>
                    <Link to={`/user/${userid}/products`} className="btn btn-info s-btn" >Manage products </Link >
                </li>

            </ul>

        </>)
    }
}
export default Sidebar;