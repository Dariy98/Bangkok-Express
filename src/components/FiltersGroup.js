import React from "react";
import { useProducts } from '../context';

export default function Filters () {

    const { filterByNuts, getAllDishes, filterByNotMeats } = useProducts();

    const filterIfChecked = (e) => {
        if(e.target.checked) {
            filterByNuts()
        }
        else getAllDishes()
    }
    
    const filterIfCheckedVegeterian = (e) => {
        if(e.target.checked) {
            filterByNotMeats()
        }
        else getAllDishes()
    }

    return(
        <div className="filters">
            <div className="filters__group">
                <label className="filters__label">Max spiciness</label>
                <div className="filters__slider">
                <div className="slider">
                    <div className="slider__thumb">
                        <span className="slider__value">3</span>
                    </div>
                    <div className="slider__progress"></div>
                    <div className="slider__steps">
                        <span></span>
                        <span className="slider__step-active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="filters__group">
                <div className="filters__checkbox">
                    <input
                        className="styled-checkbox"
                        id="nuts-checkbox"
                        type="checkbox"
                        value="1"
                        onClick={((e) => {filterIfChecked(e)})}
                    />
                    <label htmlFor="nuts-checkbox">
                        <span className="filters__label">No nuts</span>
                    </label>
                </div>
            </div>
            <div className="filters__group">
                <div className="filters__checkbox">
                <input
                    className="styled-checkbox"
                    id="vegeterian-checkbox"
                    type="checkbox"
                    value="1"
                    onClick={((e) => {filterIfCheckedVegeterian(e)})}
                />
                <label htmlFor="vegeterian-checkbox">
                    <span className="filters__label">Vegeterian only</span>
                </label>
                </div>
            </div>
        </div>
    )
}