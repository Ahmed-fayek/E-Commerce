import { useParams } from 'react-router-dom';
import Home from './Home';
import Navbar from '../navbar/navbar';
import ProductProvider from '../services/productsContext';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap/dist/js/bootstrap.js'
function UserHome() {
    let { userid } = useParams();
    console.log(userid)
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
