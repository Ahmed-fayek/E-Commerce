
import { useNavigate, useParams } from "react-router-dom";
import './../products/cards.css'
import Swal from "sweetalert2";
import axios from "axios";

function BasketProduct(props) {
    const { allproduct } = props;
    console.log(allproduct.user.products[0].prodid)
    const product = allproduct.productval;

    let userid = window.localStorage.userid;
    let navigate = useNavigate()

    const Updateproduct = (prod) => {
        console.log(prod)
        Swal.fire({
            title: ` how many items you want? <br><input id='amVal' value=${allproduct.user.products[0].amount} />`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                let amval = document.getElementById('amVal').value;
                if (amval > 0) {
                    axios({
                        method: 'put',
                        url: `http://localhost:9000/users/${allproduct.user.id}`,
                        data:
                        {
                            products: [
                                {
                                    prodid: allproduct.user.id,
                                    amount: amval
                                }
                            ],
                            userrrid: userid,
                        }
                    })
                } else {
                    fetch(`http://localhost:9000/users/${prod}`, { method: "DELETE" })
                }
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
                        <p className="h4 p-title">{product.title}</p>
                        <p className="h4">You have : {allproduct.user.products[0].amount}</p>
                    </b>
                    <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                        <div className="text-muted text-uppercase px-2 border-right">insto2007</div>
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
                            <p className="bottom btn btn-primary dets" onClick={() => {
                                navigate(`/user/products/${product.id}`)
                            }} to={`/user/products/${product.id}`}>Go To Details</p>

                            <span onClick={() => { Updateproduct(allproduct.user.id) }} className="del-Basket-b bottom btn btn-primary " >Update</span>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}
export default BasketProduct;







