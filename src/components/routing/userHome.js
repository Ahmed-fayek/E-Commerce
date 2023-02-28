import Home from './Home';
import Navbar from '../navbar/navbar';
import ProductProvider from '../services/productsContext';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap/dist/js/bootstrap'
import { Provider } from 'react-redux';
import store from '../services/store';

function UserHome() {
    let userid = window.localStorage.userid;
    return (
        <div className="App">
            <div >
                <Navbar userid={userid} />
                <Provider store={store}>
                    <ProductProvider>
                        <Home />
                    </ProductProvider>
                </Provider>
                <div >

                </div>
            </div>
        </div>
    );
}

export default UserHome;
