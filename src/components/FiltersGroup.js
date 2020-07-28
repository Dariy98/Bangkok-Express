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
    const spicesValue = document.querySelector(".slider__value")
    const progress = document.querySelector(".slider__progress")
    const toggle = document.querySelector(".slider__thumb")
    // const steps = document.querySelector(".slider__steps")
    const steps = document.querySelectorAll(".slider__steps > span")

    // steps.addEventListener("click", (e) => {
    //     console.log(e.target)
    // })
    const onProgress = (e) => {
        console.log(e.target)
    }
    console.log(spicesValue, progress, toggle, steps)
    return(
        <div className="filters">
            <div className="filters__group">
                <label className="filters__label">Max spiciness</label>
                <div className="filters__slider" onClick={((e) => onProgress(e))}>
                <div className="slider">
                    <div className="slider__thumb">
                        <span className="slider__value">0</span>
                    </div>
                    <div className="slider__progress" style={ {width: "0%"}}></div>
                    <div className="slider__steps">
                        <span className="slider__step-active"></span>
                        <span></span>
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