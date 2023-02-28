import './../../index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Slider from '../slider/slider';
import Cards from '../products/cards';
function Home(props) {
  return (<div className='main-page'>
    <div className='slider'>
      <Slider />
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