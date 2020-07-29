import React from "react";

import DishInModal from './DishesModal';
import ModalHeader from './ModalHeader';
import ModalForm from './ModalForm';

export default function ModalCard () {

    return(
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <ModalHeader/>
                <div className="modal__body">
                    <div>
                        <DishInModal/>
                        <ModalForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}