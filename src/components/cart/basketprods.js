
import './basketprods.css'
import Swal from "sweetalert2";
import axios from "axios";


function BasketProduct(props) {
    const { allproduct } = props;
    const product = allproduct.productval;
    let userid = window.localStorage.userid;
    let amount = allproduct.user.products[0].amount
    const Updateproduct = (prod) => {
        console.log(prod.user.id)

        Swal.fire({
            title: ` how many items you want? <br><input id='amVal' class='input-val' type='number' min='0' value=${allproduct.user.products[0].amount} />`,
            showCancelButton: true
        }).then((data) => {
            if (prod) {
                let amval = document.getElementById('amVal').value;
                if (amval > 0) {
                    axios({
                        method: 'put',
                        url: `http://localhost:9000/cart/${allproduct.user.id}`,
                        data:
                        {
                            products: [
                                {
                                    prodid: prod.productval.id,
                                    amount: amval
                                }
                            ],
                            userrrid: userid,
                        }
                    })
                } else {
                    fetch(`http://localhost:9000/cart/${prod}`, { method: "DELETE" })
                }
                window.location.reload();
            }


        })


    }
    const Deleteteproduct = (prod) => {
        Swal.fire({
            title: `Are you sure you want to delete this item from cart`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {

                fetch(`http://localhost:9000/cart/${prod}`, { method: "DELETE" })

                window.location.reload();
            }
            if (data.isDenied) {
                console.log('ss')
            }
        })
    }

    return (
        <div className='cart-products' key={product.id}>
            <div className='cart-img' ><img src={product.image} /></div>
            <h6 className='cart-title' >{product.title}</h6>
            <h5>You have : {amount}</h5>
            <h5>Total price : {product.price * amount}</h5>
            <div className="edit-btns">
                <span onClick={() => { Updateproduct(allproduct) }} className="del-Basket-b bottom btn btn-primary " >Update</span>
            </div>
            <div className="edit-btns">
                <span value='del' onClick={() => { Deleteteproduct(allproduct.user.id) }} className="del-Basket-b bottom btn btn-danger " >DELETE</span>
            </div>
        </div>
    )
}
export default BasketProduct;





