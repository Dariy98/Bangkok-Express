import React, { useRef } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { useProducts } from '../context';

export default function SliderDishes () {
    const ref = useRef(null);

    const slide = document.getElementById("center")
    const buttonLeft = document.getElementsByClassName('ribbon__arrow_left')[0]
    const buttonRight = document.getElementsByClassName('ribbon__arrow_right')[0]

    const { filterBySalads, 
        filterBySoups, 
        filterByChiken, 
        filterByBeef, 
        filterBySeafood, 
        filterByVegetable, 
        filterByBits, 
        filterByOther } = useProducts()

    const goNext = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slideNext();
      }
      slide.classList.contains('swiper-slide-active') 
      ? buttonLeft.classList.add("ribbon__arrow_visible")
      : buttonRight.classList.remove("ribbon__arrow_visible")
    };

    const goPrev = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slidePrev();
      }
      slide.classList.contains('swiper-slide-active') 
      ? buttonRight.classList.add("ribbon__arrow_visible")
      : buttonLeft.classList.remove("ribbon__arrow_visible")
    };
  
    return (
        <div className="ribbon">
            <nav className="ribbon__inner">
                <Swiper ref={ref}>
                    <div>
                        <a href="/" className="ribbon__item ribbon__item_active">All</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterBySalads(e))}>Salads</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterBySoups(e))}>Soups</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByChiken(e))}>Chicken dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByBeef(e))}>Beef dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterBySeafood(e))}>Seafood dishes</a>
                    </div>

                    <div id="center">
                        <a href="/" className="ribbon__item" onClick={((e) => filterByChiken(e))}>Chicken dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByBeef(e))}>Beef dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterBySeafood(e))}>Seafood dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByVegetable(e))}>Vegetable dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByBits(e))}>Bits and bites</a>
                    </div>

                    <div>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByBeef(e))}>Beef dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterBySeafood(e))}>Seafood dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByVegetable(e))}>Vegetable dishes</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByBits(e))}>Bits and bites</a>
                        <a href="/" className="ribbon__item" onClick={((e) => filterByOther(e))}>On the side</a>
                    </div>
                </Swiper>
            </nav>

            <div className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible" onClick={goNext}>
                <img src={require('../icons/angle-icon.svg')} alt="icon" />
            </div>

            <div className="ribbon__arrow ribbon__arrow_left" onClick={goPrev}>
                <img src={require('../icons/angle-icon.svg')} alt="icon" />
            </div>
        </div>
    );
};