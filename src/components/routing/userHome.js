import Home from './Home';
import Navbar from '../navbar/navbar';
import ProductProvider from '../services/productsContext';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap/dist/js/bootstrap'

function UserHome() {
    let userid = window.localStorage.userid;
    return (
        <div className="App">
            <div >
                <Navbar userid={userid} />
                <ProductProvider>
                    <Home />
                </ProductProvider>
                <div >

                </div>
            </div>
        </div>
    );
}

export default UserHome;
