import './../../index.css';
import { Routes, Route, Link } from 'react-router-dom';

import Cards from '../products/cards';
import Slider from '../landing/slider';
function Home() {
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