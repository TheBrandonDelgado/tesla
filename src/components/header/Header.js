import React, { useState, useEffect } from 'react';
import logo from './../../assets/tesla-logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import NavModal from './navModal/NavModal';
import LanguageModal from './languageModal/LanguageModal';
import MobileModal from './mobileModal/MobileModal';

function Header() {
    const [ isSubmenuVisible, setIsSubmenuVisible ] = useState(false);
    const [ activeMenuTab, setActiveMenuTab ] = useState();
    const [ isLanguageMenuVisible, setIsLanguageMenuVisible ] = useState(false);
    const [ isMobileMenuVisible, setIsMobileMenuVisible ] = useState(false);

    const onHover = (e) => {
        setActiveMenuTab(e.currentTarget.id);
        setIsLanguageMenuVisible(false);
    }

    const onClose = () => {
        setIsSubmenuVisible(false);
        setIsLanguageMenuVisible(false);
        setIsMobileMenuVisible(false);
    }

    useEffect(() => {
        const banner = document.querySelector(".hero-slides");
        if (isSubmenuVisible || isLanguageMenuVisible || isMobileMenuVisible) {
            banner.classList.add("blur");
            document.body.style.overflow = 'hidden';
        } else {
            banner.classList.remove('blur');
            document.body.style.overflow = '';
        }
    }, [isSubmenuVisible, isLanguageMenuVisible, isMobileMenuVisible])

    return (
        <div className='header'>
            <div id="nav" className={isSubmenuVisible || isLanguageMenuVisible ? 'menu-open': ''}>
                <h1 className="tesla-logo" alt="This is a Tesla logo" onMouseEnter={onClose}>
                    <a href="/">
                        <img className={`logo ${(isSubmenuVisible || isLanguageMenuVisible) ? "submenu-open" : "" }`} src={logo} alt="Tesla logo"></img>
                    </a>
                </h1>
                <ol id="menu-items-middle" className={ (isSubmenuVisible || isLanguageMenuVisible) ? "submenu-open" : "" } onMouseEnter={() => setIsSubmenuVisible(true)}>
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
                <ol id="menu-items-end" onMouseEnter={onClose}>
                    <li>
                        <a href="https://www.tesla.com/support">
                            <FontAwesomeIcon icon={faCircleQuestion} style={ (isSubmenuVisible || isLanguageMenuVisible) ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href='#' onClick={() => setIsLanguageMenuVisible(!isLanguageMenuVisible)}>
                            <FontAwesomeIcon icon={faGlobe} style={ (isSubmenuVisible || isLanguageMenuVisible) ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tesla.com/teslaaccount">
                            <FontAwesomeIcon icon={faCircleUser} style={ (isSubmenuVisible || isLanguageMenuVisible) ? { color: "black" } : { color: "white" } } size="lg" />
                        </a>
                    </li>
                </ol>
                <button id="mobile-menu" onClick={() => setIsMobileMenuVisible(true)}>Menu</button>
            </div>
            <NavModal isVisible={isSubmenuVisible} onClose={onClose} activeMenu={activeMenuTab} />
            <LanguageModal isVisible={isLanguageMenuVisible} onClose={onClose} />
            <MobileModal isVisible={isMobileMenuVisible} onClose={onClose} />
        </div>
        
    );
}

export default Header;