import './../../index.css';
import { Routes, Route, Link } from 'react-router-dom';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap/dist/js/bootstrap.js'
import Sidebar from '../sidebar/Sidebar';
import Slider from '../slider/slider';
import Cards from '../products/cards';
function Home(props) {
  const { userid } = props;
  return (<div className='main-page'>
    <div className='landing'>
      <div className='sidepar'>
        <Sidebar />
      </div>
      <div className='slider'>
        <Slider />
      </div>
    </div>
    <div className='main-view'>
      <Routes>
        <Route path='/' element={<>
          <Cards /></>}>
        </Route>

      </Routes>

    </div>
  </div>
  )
}
export default Home;