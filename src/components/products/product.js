import { Link, useParams } from "react-router-dom";
import './cards.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Product(props) {
    let { userid } = useParams()
    const { product } = props;
    let [userProds, setuserProds] = useState();
    useEffect(() => {
        fetch('http://localhost:9000/users').then((res) => res.json()).then((data) => setuserProds(data))
    }, [])
    let prodid = product.id;

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
                        category: e.category,
                        image: e.image,
                        rating: {
                            rate: e.rating.rate,
                            count: e.rating.count
                        },
                        userrrid: userid
                    }
                })
            }
        })

    }



    return (


        <>

            <div className="wrapper rounded bg-white">

                <div className="card">
                    <div className="px-2 red text-uppercase">new</div>
                    <div className="d-flex justify-content-center">
                        <img src={product.image}
                            className="product" alt="" />
                    </div>
                    <b className="px-2">
                        <p className="h4 p-title">{product.title} </p>
                    </b>
                    <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                        <div className="text-muted text-uppercase px-2 border-right">rating</div>
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

                            <span onClick={() => { Addproduct(product) }} className="Basket-b bottom btn btn-primary " ><span id="addtocart">Add to cart</span></span>
                            <Link className="bottom btn btn-primary " to={`/user/${userid}/products/${product.id}`}>Go To Details</Link>

                        </div>

                    </div>

                </div>



            </div>

        </>
    )
}
export default Product; 