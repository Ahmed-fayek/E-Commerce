import { Link } from "react-router-dom";
import './../all.min.css'
import './nav.css'

function Navbar(props) {
    const { userid } = props;
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"><i className="fa-solid fa-store w-co "><span className="w-co marketko">Marketko</span></i> </a>



                <Link className="nav-link active " aria-current="page" to={`/user/basket/${userid}`}>
                    <div className="show-bas">
                        <i className="w-co  fa-solid fa-cart-shopping"></i>
                        <p >Go to cart</p></div>
                </Link>


                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                        <li className="  nav-item">
                            <Link className=" nav-link active" aria-current="page" to={`/user/${userid}`}><span className="w-co">Home</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="w-co  nav-link" to={'/'}><span className="w-co">LogIn</span></Link>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    )
}

export default Navbar;