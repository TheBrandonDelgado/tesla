import React, { useState, useEffect } from 'react';
import logo from './../../assets/tesla-logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import NavModal from './navModal/NavModal';
import { act } from 'react-dom/test-utils';

function Header() {
    const [ isSubmenuVisible, setIsSubmenuVisible ] = useState(false);
    const [ activeMenuTab, setActiveMenuTab ] = useState();

    const onHover = (e) => {
        setActiveMenuTab(e.currentTarget.id);
    }

    const onClose = () => {
        setIsSubmenuVisible(false);
    }

    useEffect(() => {
        const banner = document.querySelector(".hero-slides");

        isSubmenuVisible ? banner.classList.add("blur") : banner.classList.remove('blur');
    }, [isSubmenuVisible])

    return (
        <div className="header">
            <div id="nav">
                <h1 className="tesla-logo" alt="This is a Tesla logo" onMouseEnter={() => onClose()}>
                    <a href="/">
                        <img className={`logo ${isSubmenuVisible ? "submenu-open" : "" }`} src={logo} alt="Tesla logo"></img>
                    </a>
                </h1>
                <ol id="menu-items-middle" className={ isSubmenuVisible ? "submenu-open" : "" } onMouseEnter={() => setIsSubmenuVisible(true)}>
                    <li id="vehicles" className={ activeMenuTab === 'vehicles' && isSubmenuVisible ? "active" : ""} onMouseEnter={onHover}>
                        <button>
                            <span>Vehicles</span>
                        </button>
                    </li>
                    <li id="energy" className={ activeMenuTab === "energy" && isSubmenuVisible ? "active" : ""} onMouseEnter={onHover}>
                        <button>
                            <span>Energy</span>
                        </button>
                    </li>
                    <li id="charging" className={ activeMenuTab === "charging" && isSubmenuVisible ? "active" : ""} onMouseEnter={onHover}>
                        <button>
                            <span>Charging</span>
                        </button>
                    </li>
                    <li id="discover" className={ activeMenuTab === "discover" && isSubmenuVisible ? "active" : ""} onMouseEnter={onHover}>
                        <button>
                            <span>Discover</span>
                        </button>
                    </li>
                    <li id="shop" className={ activeMenuTab === 'shop' && isSubmenuVisible ? "active" : ""} onMouseEnter={onHover}>
                        <button>
                            <span>Shop</span>
                        </button>
                    </li>
                </ol>
                <ol id="menu-items-end" onMouseEnter={() => onClose()}>
                    <li>
                        <a href="https://www.tesla.com/support">
                            <FontAwesomeIcon icon={faCircleQuestion} style={ isSubmenuVisible ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faGlobe} style={ isSubmenuVisible ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tesla.com/teslaaccount">
                            <FontAwesomeIcon icon={faCircleUser} style={ isSubmenuVisible ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                </ol>
            </div>
            <NavModal isVisible={isSubmenuVisible} onClose={onClose} activeMenu={activeMenuTab} />
        </div>
        
    );
}

export default Header;