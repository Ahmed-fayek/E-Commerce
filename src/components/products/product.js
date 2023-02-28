import { Link, useParams } from "react-router-dom";
import './cards.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Product(props) {
    let userid = window.localStorage.userid;
    const { product } = props;
    let [userProds, setuserProds] = useState();
    useEffect(() => {
        fetch('http://localhost:9000/users').then((res) => res.json()).then((data) => setuserProds(data))
    }, [userProds])

    const Addproduct = (e) => {
        let exist = 0;
        let cartd = 0;
        let curramount = 0
        userProds.map((prod) => {
            if (e.id === prod.products[0].prodid && prod.userrrid === userid) {
                exist = 1;
                cartd = prod.id;
                curramount = prod.products[0].amount;
            } else {
            }
        })
        Swal.fire({
            title: `Add  <input id='amount' value='${curramount}'></input>to cart`,

            showCancelButton: true,
        }).then((data) => {
            let amount = document.getElementById('amount');
            if (data.isConfirmed && exist === 0) {
                axios({
                    method: 'post',
                    url: `http://localhost:9000/users`,
                    data:
                    {
                        products: [
                            {
                                prodid: e.id,
                                amount: amount.value ? amount.value : 1
                            }
                        ],
                        userrrid: userid,
                    }
                })
            } else if (data.isConfirmed && exist === 1) {
                axios({
                    method: 'put',
                    url: `http://localhost:9000/users/${cartd}`,
                    data:
                    {
                        products: [
                            {
                                prodid: e.id,
                                amount: amount.value
                            }
                        ],
                        userrrid: userid,
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
                        <Link to={`/user/products/${product.id}`}>

                            <img src={product.image}
                                className="product" alt="" ></img>
                        </Link>
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

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Product; 