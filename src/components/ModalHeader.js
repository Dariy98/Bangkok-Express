import React from "react";
import { useProducts } from '../context';

export default function ModalHeader () {

    const { toggleCart } = useProducts()

    return(
        <div className="modal__header">
            <button type="button" className="modal__close" onClick={(() => {toggleCart()})}>
                <img src={require("../icons/cross-icon.svg")} alt="close-icon" />
            </button>
            <h3 className="modal__title">Your order</h3>
        </div>
    )
}