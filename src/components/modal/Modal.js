import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal({ content, id, isOpen, onClose }) {
    useEffect(() => {
        const modal = document.querySelector(".modal");

        if (isOpen) {
            modal.classList.add('visible');
        } else {
            modal.classList.remove('visible');
        }
    }, [isOpen]);

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <dialog className="modal" id={id}>
                <div className="modal-header">
                    <button type="button" className="modal-close" onClick={onClose}><FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} size="lg" /></button>
                </div>
                <div className="modal-content">
                    {content}
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;