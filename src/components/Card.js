import React from "react";

import { useProducts } from '../context';

export default function Card () {

    const { cards, collectArrCart } = useProducts()

    return(
        <div className="products-grid__inner">
            {cards.map(card => {
                return(
                    <div className="card" key={card.id}>
                        <div className="card__top">
                            <img
                                src={card.image}
                                className="card__image"
                                alt="product"
                            />
                            <span className="card__price">€{card.price}</span>
                        </div>
                        <div className="card__body">
                        <div className="card__title">{card.name}</div>
                            <button type="button" className="card__button" onClick={(() => {collectArrCart(card)})}>
                                <img src={require('../icons/plus-icon.svg')} alt="icon" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}