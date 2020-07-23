import React, { useRef } from "react";
import Swiper from 'react-id-swiper';

export default function Slider () {
    const ref = useRef(null);

    const goNext = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slideNext();
      }
    };
  
    const goPrev = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        ref.current.swiper.slidePrev();
      }
    };
  
    return (
  <div className="carousel">
        <Swiper ref={ref}>

            <div>
                <div className="carousel__slide">
                    <img
                        src={require('../carousel/penang_shrimp.png')}
                        className="carousel__img"
                        alt="slide"
                    />
                    <div className="carousel__caption">
                        <span className="carousel__price">€16.00</span>
                        <div className="carousel__title">Penang shrimp</div>
                        <button type="button" className="carousel__button">
                            <img  src={require('../icons/plus-icon.svg')} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="carousel__slide">
                    <img
                        src={require('../carousel/chicken_cashew.png')}
                        className="carousel__img"
                        alt="slide"
                        />
                    <div className="carousel__caption">
                        <span className="carousel__price">€14.00</span>
                    <div className="carousel__title">Penang shrimp</div>
                        <button type="button" className="carousel__button">
                            <img  src={require('../icons/plus-icon.svg')} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="carousel__slide">
                    <img
                        src={require('../carousel/red_curry_vega.png')}
                        className="carousel__img"
                        alt="slide"
                    />
                    <div className="carousel__caption">
                        <span className="carousel__price">€12.50</span>
                        <div className="carousel__title">Red curry veggies</div>
                        <button type="button" className="carousel__button">
                        <img  src={require('../icons/plus-icon.svg')} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="carousel__slide">
                    <img
                        src={require('../carousel/chicken_loempias.png')}
                        className="carousel__img"
                        alt="slide"
                    />
                    <div className="carousel__caption">
                        <span className="carousel__price">€6.50</span>
                        <div className="carousel__title">Chicken springrolls</div>
                        <button type="button" className="carousel__button">
                            <img  src={require('../icons/plus-icon.svg')} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>

        </Swiper>
        <div className="carousel__arrow carousel__arrow_right" onClick={goNext}>
            <img src={require('../icons/angle-icon.svg')} alt="icon" />
        </div> 

        <div className="carousel__arrow carousel__arrow_left" onClick={goPrev}>
            <img  src={require('../icons/angle-left-icon.svg')} alt="icon" />
        </div>
      </div>
    );
};
  