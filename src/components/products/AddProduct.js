import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import imagesrc from './../images/image2.jpeg';
import './products.css'
import Navbar from "../navbar/navbar";

function Add() {
    let userid = window.localStorage.userid;

    let navigate = useNavigate();
    const [title, settitle] = useState('')
    const [price, setprice] = useState(0)
    const [description, setdescription] = useState('')
    const formSub = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `http://localhost:9000/product`,
            data: {
                title,
                price,
                description,
                image: imagesrc,
                rating: {
                    rate: 0,
                    count: 0
                }
            }
        }).then((data) => {
            navigate(`/user/products`)
        });
    }

    return (
        <>
            <Navbar />
            <div className="prods-con">
                <h1>Add new product</h1>
                <form onSubmit={formSub}>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input onChange={(e) => { settitle(e.target.value) }} type="text" className="form-control" id="prodTitle" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">description</label>
                        <input onChange={(e) => { setdescription(e.target.value) }} type="text" className="form-control" id="prodDescription" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input onChange={(e) => { setprice(+e.target.value) }} type="text" className="form-control" id="prodPrice" />
                    </div>
                    <div className="edit-btns">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to={`/user/products`} className="btn btn-danger">Cancel </Link>
                    </div>
                </form></div></>)
}
export default Add;