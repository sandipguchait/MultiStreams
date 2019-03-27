import React from 'react';
import ReactDOM from 'react-dom'

// Creating a React portal to crearte a Modal
const Modal = (props) => {
    return (
        ReactDOM.createPortal(
            <div className="ui dimmer modals visible active">
              <div className="ui standard modal visible active">
                jrbjbagbrkjgbeg 
              </div>  
            </div>,
            document.querySelector('#modal')
        )
    );
};

export default Modal;