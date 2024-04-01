import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal({ content, id, isOpen, onClose }) {
    if (!isOpen) return null;

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