import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Product from "./product";
function ProductDetails() {
    let { productId } = useParams();
    let [product, setprod] = useState([])
    let [sProduct, setsProd] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/product/${productId}`).then((res) => res.json()).then((data) => setprod(data))
    }, [productId])
    useEffect(() => {
        fetch(`http://localhost:9000/product`).then((res) => res.json()).then((data) => setsProd(data))
    }, [])


    return (<div className="prods-dets">

        <div className="wrapper rounded det-view">
            <Product product={product} />
        </div>
        <div className="similar-products">

            <h1> Similar products</h1>
            <div className="similar-products-view">
                {
                    sProduct.map((el) => {
                        if (el.category === product.category) {
                            return (
                                <div key={el.id}>
                                    <Product product={el} />
                                </div>

                            )
                        }
                    })
                }
            </div>
        </div>

    </div>
    )
}
export default ProductDetails;