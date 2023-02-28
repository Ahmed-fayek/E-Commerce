
import { Link } from "react-router-dom";
import './../all.min.css'
import './nav.css'
function Navbar(props) {
    let userid = window.localStorage.userid;
    let username = window.localStorage.username;
    let x = '';
    if (userid < 0) {
        x = <Link to={`/user/products`} className="w-co nav-link" ><span className="w-co">Manage products</span> </Link >
    }
    let toggle = 0;
    window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 700px)").matches) {
            document.getElementById("show").style.display = "none";
        }
    })
    const show = () => {
        var show = document.getElementById("show")
        if (toggle === 0) {
            show.style.display = "flex";

            toggle = 1;
        } else {
            show.style.display = "none";
            toggle = 0;
        }

    }
    return (
        <>
            <div className="navb">
                <div className="r-navb">
                    <Link to={`/user/`} className="navbar-brand"><i className="fa-solid fa-store w-co "><span className="w-co marketko">Marketko</span></i> </Link>
                    <Link className="nav-link active " aria-current="page" to={`/user/basket/`}>
                        <div className="show-bas">
                            <i className="w-co  fa-solid fa-cart-shopping"></i>
                            <p >Go to cart</p></div>
                    </Link>
                </div>
                <p className="welcome-user ">
                    Welcome {username}
                </p>
                <div className="l-navb">
                    <div onClick={show} className='bars'>
                        <span></span><span></span><span></span></div>
                    <div className='show' >
                        <ul  >

                            <li className="nav-item">
                                {
                                    x
                                }
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link" aria-current="page" to={`/user/`}><span className="w-co">Home</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className=" nav-link" to={'/'}><span className="w-co">LogIn</span></Link>
                            </li>


                        </ul>
                    </div>
                    <div >
                        <ul id='show' className='drop-down'>

                            <li className="nav-item">
                                {
                                    x
                                }
                            </li>
                            <li className="  nav-item">
                                <Link className=" nav-link active" aria-current="page" to={`/user/`}><span className="w-co">Home</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="w-co  nav-link" to={'/'}><span className="w-co">LogIn</span></Link>
                            </li>

                        </ul>
                    </div>


                </div>
            </div >
        </>
    )
}

export default Navbar;


