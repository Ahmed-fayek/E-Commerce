
import { useNavigate, useParams } from "react-router-dom";
import './../products/cards.css'
import Swal from "sweetalert2";

function BasketProduct(props) {
    const { product } = props;
    let { userid } = useParams();
    let navigate = useNavigate()
    const Deleteproduct = (prod) => {
        Swal.fire({
            title: `Are you sure you want to delete this product`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/users/${prod.id}`, { method: "DELETE" })
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
                                navigate(`/user/${userid}/products/${product.id}`)
                            }} to={`/user/${userid}/products/${product.id}`}>Go To Details</p>

                            <span onClick={() => { Deleteproduct(product) }} className="del-Basket-b bottom btn btn-primary " >delete</span>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}
export default BasketProduct;







