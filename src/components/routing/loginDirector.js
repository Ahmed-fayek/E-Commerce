import { Route, Routes } from "react-router-dom";
import LogIn from "../login/LogIn";
import Register from "../login/register";
import UserHome from "./userHome";
import Products from "../products/products";
import Add from "../products/AddProduct";
import Navbar from "../navbar/navbar";
import ProductDetails from "../products/Productdetails";
import EditProduct from "../products/editproduct";
import Filter from "../filter/filter";
import MyBasket from "../cart/MyBasket";

function LoginDirector() {
    return (<>
        <Routes>
            <Route path="/" element={<><LogIn /></>}></Route>
            <Route path="/register" element={<><Register /></>}></Route>
            <Route path="/user/:userid" element={<UserHome />}></Route>
        </Routes>
        <Routes>
            <Route path='/user/:userid/products' element={<Products />} />
            <Route path='/user/:userid/addproducts/add' element={<Add />} />
            <Route path='/user/:userid/products/:productId' element={<><Navbar /><ProductDetails /></>} />
            <Route path='/user/:userid/products/edit/:productId' element={<><Navbar /><EditProduct /></>} />
            <Route path='/user/:userid/:Filt' element={<><Navbar /> <Filter /></>} />
            <Route path={`/user/basket/:userid`} element={<MyBasket />} />
        </Routes>
    </>)
}
export default LoginDirector;