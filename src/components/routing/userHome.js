import { useParams } from 'react-router-dom';
import Home from './Home';
import Navbar from '../navbar/navbar';

function UserHome() {
    let { userid } = useParams();
    console.log(userid)
    return (
        <div className="App">
            <div >
                <Navbar userid={userid} />

                <Home />

                <div >

                </div>
            </div>
        </div>
    );
}

export default UserHome;
