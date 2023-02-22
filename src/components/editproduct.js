import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {
    let { productId } = useParams()
    let { userid } = useParams()

    let [prod, setprod] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/product/${productId}`).then((res) => res.json()).then((data) => setprod(data))
    }, [])
    let navigate = useNavigate();
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')
    const [rate, setrate] = useState('')
    const [count, setcount] = useState('')
    const [description, setdescription] = useState('')

    const formSub = (e) => {
        e.preventDefault();

        //productService.update(productId,product)

        axios({
            method: 'put',
            url: `http://localhost:9000/product/${productId}`,
            data: {
                title: (title) ? title : prod.title,
                price: (price) ? price : prod.price,
                description: (description) ? description : prod.description,
                id: prod.id,
                category: (category) ? category : prod.category,
                image: (image) ? image : prod.image,
                rating: {
                    rate: (rate) ? rate : prod.rating.rate,
                    count: (count) ? count : prod.rating.count
                }
            }
        }).then((data) => {
            navigate(`/user/${userid}/products`)
        });
    }

    return (<>
        <h1>Add new product</h1>
        <form onSubmit={formSub}>
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input onChange={(e) => { settitle(e.target.value) }} type="text" value={prod.title} className="form-control" id="prodTitle" />
                <label className="form-label"><small>the old name is {prod.title}</small></label>
            </div>
            <div className="mb-3">
                <label className="form-label">description </label>
                <input onChange={(e) => { setdescription(e.target.value) }} type="text" value={prod.description} className="form-control" id="prodDescription" />
                <label className="form-label"><small>the old description is {prod.description}</small></label>

            </div>
            <div className="mb-3">
                <label className="form-label">price </label>
                <input onChange={(e) => {
                    setprice(+e.target.value);
                }} type="text" className="form-control" id="prodPrice" />
                <label className="form-label"><small>the old price is {prod.price}</small></label>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={`/user/${userid}/products`} className="btn btn-danger">cancel</Link>
        </form></>)
}
export default EditProduct;