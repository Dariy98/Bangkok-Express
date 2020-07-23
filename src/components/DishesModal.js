import React, { useState } from "react";
import { useProducts } from '../context';

export default function DishInModal () {

    const { cartProducts } = useProducts()
    
    //не получилось пока что сделать счётчик.
    //идея была в том чтобы в корзине добавить продуктам 
    //свойство count и с ним уже работать, но почему то 
    //массив обновляется, и count обновляется, а страница нет.
    const [ cart, setC] = useState(cartProducts)

    const countClickPlus = (id) => {
        cart.map(p=> {
            if(p.id === id) {
                return (p.count = p.count + 1)
            }
            return p
        })
        setC(cart)
        console.log(cart)
    }
    
    const countClickMinus = (id) => {
        cartProducts.map(p => {
            if(p.id === id) {
                return (p.count = p.count - 1)
            }
            return p
        })
        setC(cartProducts)
    }

    return(
        <div>
            {cart.map(prod => {
                cart.map(prod => {return prod.count = 1})
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
                                            onClick={(() => countClickMinus(prod.id))}>
                                        <img
                                            src={require("../icons/square-minus-icon.svg")}
                                            alt="minus"
                                        />
                                    </button>
                                    <span className="cart-counter__count">{prod.count}</span>
                                    <button type="button" 
                                        className="cart-counter__button cart-counter__button_plus" 
                                        onClick={(() => countClickPlus(prod.id))}>
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