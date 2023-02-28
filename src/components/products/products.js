import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../navbar/navbar";
function Products() {
    let userid = window.localStorage.userid;
    let [products, setproducts] = useState([]);
    useEffect(() =>
        getAllProducts()
        , []);
    const getAllProducts = () => {
        fetch('http://localhost:9000/product')
            .then((res) => res.json())
            .then((data) => setproducts(data))

    }
    const deleteproduct = (prod) => {
        Swal.fire({
            title: `Are you sure you want to delete this product`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/product/${prod.id}`, { method: "DELETE" }).then((res) => res.json()).then((data) => getAllProducts())

            }
        })

    }
    return (<>
        <Navbar userid={userid} />

        <h1>products</h1>
        <Link to={`/user/addproducts/add`} className="btn btn-success">Add new product</Link>
        <table className="table">
            <thead>

                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">image</th>
                </tr>
            </thead>
            <tbody>
                {products.map((el) => {
                    return (<tr key={el.id}>
                        <td>{el.id}</td>
                        <td width={'600px'}>{el.title}</td>
                        <td>{el.price}</td>
                        <td><img height={`50px`} src={el.image} ></img></td>
                        <td>
                            <Link to={`/user/products/edit/${el.id}`} className="btn btn-info">Update</Link>
                            <button onClick={() => deleteproduct(el)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                })}

            </tbody>
        </table>
    </>)
}
export default Products;
// json-server --watch db.json --port 9000