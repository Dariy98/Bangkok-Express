import React from "react";
import Slider from './Slider';
import CardsGrid from './CardGrid';
import SliderDishes from './SliderDishes';
import Filters from './FiltersGroup';


export default function Main () {
    return(
        <main>
            <div className="container">
                <Slider/>
            </div>
            <div className="container">
                <h2 className="section-heading">Our Menu</h2>
                <div>
                    <div className="container">
                        <SliderDishes/>
                    </div>
                </div>
            </div>
            <div className="container">
                <Filters/>
            </div>
            <CardsGrid/>
        </main>
    )
}