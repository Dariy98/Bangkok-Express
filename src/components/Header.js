import React from "react";
import { useProducts } from '../context';

export default function Header () {

    const { toggleCart, cartProducts, totalPrices } = useProducts()

    return(
        <header className="header container">
            <h1 className="heading logo">Bangkok Express</h1>
            <h3 className="subheading">Great food・Free delivery・Fair price</h3>

            {cartProducts.length > 0 && 
                <button type="button" className="cart-icon cart-icon_visible" onClick={(() => {toggleCart()})}>
                    <div className="cart-icon__inner">
                        <span className="cart-icon__count">{cartProducts.length}</span>
                        <span className="cart-icon__price">€{totalPrices}</span>
                    </div>
                </button>
            }
        </header>
    )
}