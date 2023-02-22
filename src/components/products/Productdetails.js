import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Product from "./product";
function ProductDetails() {
    let { productId } = useParams();
    let { userid } = useParams();
    let [product, setprod] = useState([])
    let [sProduct, setsProd] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/product/${productId}`).then((res) => res.json()).then((data) => setprod(data))
    }, [productId])
    useEffect(() => {
        fetch(`http://localhost:9000/product`).then((res) => res.json()).then((data) => setsProd(data))
    }, [])

    const Addproduct = (e) => {
        Swal.fire({
            title: `Add ${e.title} to cart`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                axios({
                    method: 'post',
                    url: `http://localhost:9000/users`,
                    data: {
                        title: e.title,
                        price: e.price,
                        description: e.description,
                        id: e.id,
                        category: e.category,
                        image: e.image,
                        rating: {
                            rate: e.rating.rate,
                            count: e.rating.count
                        }
                    }
                })
            }
        })

    }
    return (<div className="prods-dets">

        <div className="wrapper rounded bg-white det-view">
            <h1> {product.title} Details</h1>
            <div className="card">
                <div className="px-2 red text-uppercase">new</div>
                <div className="d-flex justify-content-center">
                    <img src={product.image}
                        className="product" alt="" />
                </div>
                <b className="px-2">
                    <p className="h4">{product.title}</p>
                    <p className="h6">Description : {product.description
                    }</p>
                </b>
                <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                    <div className="text-muted text-uppercase px-2 border-right">rate : </div>
                    <div className="px-lg-2 px-1">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <a href="#" className="px-lg-2 px-1 reviews"> </a>
                    </div>
                </div>

                <div className="bottom-btns">
                    <div className="d-flex align-items-center justify-content-between py-2 px-3">
                        <div className="h4"><span>$</span> {product.price}</div>
                        <div>

                        </div>

                    </div>
                    <div className="btns">
                        <span onClick={() => { Addproduct(product) }} className="Basket-b bottom btn btn-primary " >Add to cart</span>

                        <Link to={`/user/${userid}`} href="#" className="btn btn-primary">Continue Shopping</Link>

                    </div>

                </div>

            </div>



        </div>

        <div className="similar-products">

            <h1> Similar products</h1>
            <div className="similar-products-view">
                {
                    sProduct.map((el) => {
                        if (el.category === product.category) {
                            return (<Product product={el} />)
                        }
                    })
                }
            </div>
        </div>

    </div>
    )
}
export default ProductDetails;