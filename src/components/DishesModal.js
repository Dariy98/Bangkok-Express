import React from "react";

import { useProducts } from '../context';

export default function DishInModal () {

    const { cartProducts, setCart } = useProducts()
    
    const clickPlus = (id) => {
        cartProducts.map(product => {
            if(product.id === id) {
                product.count = product.count + 1;
            }
            return product
        })
        setCart(cartProducts => [...cartProducts])
    }
    
    const clickMinus = (id) => {
        cartProducts.map(product => {
            if(product.id === id) {
                product.count = product.count - 1;
                if(product.count === 0) { deleteDish(product.id) }
            }
            return product
        })
        setCart(cartProducts => [...cartProducts])
    }

    const deleteDish = (id) => {
        let updateArr = cartProducts.filter(product => id !== product.id);
        setCart(cartProducts => [...updateArr])
        console.log("delete", updateArr)
    }

    return(
        <div>
            {cartProducts.map(prod => {
                return(
                    <div className="cart-product" key={prod.id}>
                        <div className="cart-product__img">
                            <img src={prod.image} alt="product" />
                        </div>
                        <div className="cart-product__info">
                            <div className="cart-product__title">{prod.name}</div>
                            <div className="cart-product__price-wrap">
                                <div className="cart-counter">
                                    <button type="button" 
                                            className="cart-counter__button cart-counter__button_minus" 
                                            onClick={(() => clickMinus(prod.id))}>
                                        <img
                                            src={require("../icons/square-minus-icon.svg")}
                                            alt="minus"
                                        />
                                    </button>
                                    <span className="cart-counter__count">{prod.count}</span>
                                    <button type="button" 
                                        className="cart-counter__button cart-counter__button_plus" 
                                        onClick={() => clickPlus(prod.id)}>
                                            <img src={require("../icons/square-plus-icon.svg")} alt="plus" />
                                    </button>
                                </div>
                                <div className="cart-product__price">€{prod.price * prod.count}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}