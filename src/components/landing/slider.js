import { useContext } from 'react';
import './sidepar.css'
import { Productcontext } from '../services/productsContext';
function Slider() {
    const prod = useContext(Productcontext);
    const titlechanged = document.getElementById('titlechanged');
    const sliderImage = document.getElementById('slider-img');
    const pricechanged = document.getElementById('pricechanged');
    const descchanged = document.getElementById('descchanged');
    const sliderproduct = document.getElementById('slider-product');
    const sliderbtns = document.getElementById('slider-btns');
    const sliderimg = document.getElementById('slider-img');
    const slidershow = document.getElementById('slider-show');
    const landingpage = document.getElementById('landing-page');
    let currentProduct
    const nextProduct = (e) => {

        currentProduct = e;
        titlechanged.innerText = `Title : ${currentProduct.title}`;
        pricechanged.innerText = ` Price : ${currentProduct.price}`;
        descchanged.innerText = ` Description : ${currentProduct.description}`;
        sliderImage.src = currentProduct.image
        sliderproduct.classList.remove('slider-product');
        void sliderproduct.offsetWidth;
        sliderproduct.classList.add('slider-product');
        sliderimg.classList.remove('slider-img');
        slidershow.style.display = 'flex';
        landingpage.style.display = 'none';
        void sliderimg.offsetWidth;
        sliderimg.classList.add('slider-img');

    }
    return (
        <div className='slider'>
            <div id='landing-page' className='landing-bg'>
                <div className='landing-page'>
                    <h1>Welcome to <span >MARKETKO</span></h1>
                    <div>
                        <p>Your appearance{ } </p>
                        <p>shows your quality!</p>
                        <a href='#categoty' className='bottom btn btn-primary header-btn'> explore category</a>
                        <a href='#all-products' className='bottom btn btn-primary header-btn'> explore all products</a>
                    </div>
                </div>
            </div>
            <div id='slider-show' className='slider-show unshown'>

                <div id='slider-product' className='slider-product'>
                    <p id='titlechanged'></p>
                    <p id='descchanged'></p>
                    <p id='pricechanged'></p>
                </div>
                <div className='landing-img-container'>
                    <img id='slider-img' className='slider-img' ></img>
                </div>
            </div>
            <div className='slider-btns' id='slider-btns'>

                <h6>Explore Products</h6>
                {
                    prod.map((ele) => {
                        return (
                            <img key={ele.id} className='down-slider-img' onClick={(e) => {
                                nextProduct(ele);
                            }} src={ele.image}></img>)
                    })
                }
            </div>
        </div>)
}
export default Slider;