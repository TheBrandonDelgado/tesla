import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './navModal.css';
import { navModalContent } from './navModalContent';

function NavModal({ isVisible, onClose, activeMenu }) {

    useEffect(() => {
        const navModal = document.querySelector(".nav-modal");

        if (isVisible) {
            navModal.classList.add('visible');
        } else {
            navModal.classList.remove('visible');
        }
    }, [isVisible]);

    const mainItems = activeMenu ? navModalContent[activeMenu].mainItems : null;
    const sideItems = activeMenu ? navModalContent[activeMenu].sideItems : null;
    const sections = activeMenu ? navModalContent[activeMenu].sections : null;

    return ReactDOM.createPortal(
        <div className="nav-modal" onMouseLeave={() => onClose()}>
            { 
                mainItems &&
                <div className="main-items-menu">
                    {
                        mainItems.map((item, index) => (
                            <div className="product" style={{transitionDelay: `${(index + 1) * 0.08}s`}}>
                                <a href={item.links[0].link}>
                                    <img className="product-image" src={item.imageSrc} alt={item.label}></img>
                                </a>
                                <div className="product-content">
                                    <h3>{item.label}</h3>
                                    <div className="product-content-links">
                                        {
                                            item.links.map(link => (
                                                <a href={link.link}>{link.label}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            {
                sideItems &&
                <div className="side-items-menu">
                    <ul>
                        {
                            sideItems.map(item => (
                                <li>
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
            {
                sections &&
                <div className="sections-menu">
                    {
                        sections.map(section => (
                            <div>
                                <h3 className="section-heading">{section.label}</h3>
                                <ul className="section-links">
                                    {
                                        section.items.map(item => (
                                            <li>
                                                <a href={item.link}>{item.label}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            }
        </div>,
        document.getElementById('modal-root')
    );
}

export default NavModal;