import { useState, useEffect } from 'react';
import './basketprods.css'
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../navbar/navbar';
import BasketProduct from './basketprods';
function MyBasket() {
    let userid = window.localStorage.userid;
    let [fprods, setfprods] = useState([]);
    let [allprods, setallprods] = useState([]);
    let [userprods, setuserprods] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:9000/users/`)
            .then((res) => res.json())
            .then((json) => setfprods(json))
    }, [])
    useEffect(() => {

        fetch(`http://localhost:9000/product`)
            .then((res) => res.json())
            .then((data) => {
                setallprods(data)
            })
    }, [])

    let subtotal = 0;
    const buyConfirm = () => {
        Swal.fire({
            title: `Confirm `,
            showCancelButton: true
        })
    }
    useEffect(() => {
        fprods.map((ele) => {
            if (ele.userrrid === userid) {
                allprods.map((products) => {
                    if (ele.products[0].prodid === products.id) {
                        userprods.push(products)
                    }

                })
            }
        })
    }, [fprods])

    console.log(userprods)


    return (<>
        <Navbar userid={userid} />

        <div className='basket'>


            <div className='basket-flex'>
                <div className='left-bas'>
                    <div className="col-lg-7">
                        <Link className="bottom btn btn-primary dets" to={`/user/`}><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link>
                        <hr />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <p className="mb-1">Shopping cart</p>
                                <p className="mb-0">You have {userprods.length} items in your cart</p>
                            </div>

                        </div>

                    </div>
                    <div className='basket-prods-view'>
                        {
                            userprods.map((el) => {
                                subtotal += el.price;
                                return (
                                    <div key={el.id}>
                                        <BasketProduct product={el} />
                                    </div>
                                )



                            })

                        }
                    </div>
                </div>


                {/* ... */}
                <div className="card bg-primary text-white rounded-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>

                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-visa fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-amex fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                        <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                                <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                    placeholder="Cardholder's Name" />
                                <label className="form-label">Cardholder's Name</label>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                    placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                <label className="form-label"  >Card Number</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="form-outline form-white">
                                        <input type="text" id="typeExp" className="form-control form-control-lg"
                                            placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                        <label className="form-label" >Expiration</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-outline form-white">
                                        <input type="password" id="typecvv" className="form-control form-control-lg"
                                            placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                        <label className="form-label"  >Cvv</label>
                                    </div>
                                </div>
                            </div>

                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">{subtotal}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">{(subtotal > 0) ? subtotal + 20 : 0}

                            </p>
                        </div>

                        <button onClick={buyConfirm} type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                                <span>Buy now</span><i className="fas fa-long-arrow-alt-right ms-2"> </i>

                            </div>
                        </button>

                    </div>
                </div>
            </div>

        </div>

    </>
    )
}
export default MyBasket;