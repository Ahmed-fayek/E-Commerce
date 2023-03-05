import './cards.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";

function Product(props) {
    let userid = window.localStorage.userid;
    const { product } = props;
    let [userProds, setuserProds] = useState();
    let rateval = (product.rating.rate).toFixed(1);

    const setValue = (value) => {
        axios({
            method: 'put',
            url: `http://localhost:9000/Product/${product.id}`,
            data:
            {
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                id: product.id,
                rating: {
                    count: product.rating.count + 1,
                    rate: (product.rating.rate * product.rating.count + value) / (product.rating.count + 1)

                }
            }
        })
    }
    useEffect(() => {
        fetch('http://localhost:9000/cart').then((res) => res.json()).then((data) => setuserProds(data))
    }, [])

    const Addproduct = (e) => {
        let exist = 0;
        let cartd = 0;
        let curramount = 1
        userProds.map((prod) => {
            if (e.id === prod.products[0].prodid && prod.userrrid === userid) {
                exist = 1;
                cartd = prod.id;
                curramount = prod.products[0].amount;
            }
        })
        Swal.fire({
            title: `<div class='alert-content'><p>Add</p><input type='number' class='input-val' id='amount' value='${curramount}' min="1"></input><p>to cart</p></div>`,

            showCancelButton: true,
        }).then((data) => {
            let amount = document.getElementById('amount');
            if (data.isConfirmed && exist === 0) {
                axios({
                    method: 'post',
                    url: `http://localhost:9000/cart`,
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
                    url: `http://localhost:9000/cart/${cartd}`,
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

    const lovethis = (e) => {
        if (e.classList.contains('fa-solid')) {
            e.classList.remove('fa-solid')

        } else if (!e.classList.contains('fa-solid')) {
            e.classList.add('fa-solid')
        }

    }
    return (
        <>
            <div className="wrapper rounded backg-white">
                <div className="card">
                    <div className="px-2 red text-uppercase">
                        <i id="fav-icon" onClick={(e) => {
                            lovethis(e.target)
                        }} className="fa-regular fa-heart"></i>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a >
                            <img src={product.image}
                                alt="" ></img>
                        </a>
                    </div>
                    <b className="px-2 p-title">
                        <a >
                            <p className="h4 p-title">{product.title} </p></a>
                    </b>
                    <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2 rating-trans">
                        <div className="text-muted text-uppercase px-2 border-right">rating : {rateval * 20}%</div>
                        <div className="px-lg-2 px-1 rate-bg">
                            <ReactStars
                                value={+rateval}
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="text-muted px-2 border-right">{product.rating.count} rete</div>
                    </div>
                    <div className="bottom-btns">
                        <div className="d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="h4 price-trans">Price : {product.price} <span>$</span></div>
                            <div>
                            </div>
                        </div>
                        <div className="btns">

                            <span onClick={() => { Addproduct(product) }} className="Basket-b bottom btn btn-danger " ><span id="addtocart">Add to cart</span></span>

                        </div>
                        <div className="animated-background"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product; 