import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './mobileModal.css';
import { faXmark, faChevronLeft, faGlobe, faCircleUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navModalContent } from '../navModal/navModalContent';
import { languageData } from '../languageModal/languageModalContent';

function MobileModal({ isVisible, onClose }) {
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    const [ activeMenu, setActiveMenu ] = useState();
    const [ isLanguageMenuActive, setIsLanguageMenuActive ] = useState(false);
    const [ activeRegion, setActiveRegion ] = useState();
    const [ activeCountry, setActiveCountry ] = useState();
    const mainItems = activeMenu ? navModalContent[activeMenu].mainItems : null;
    const sideItems = activeMenu ? navModalContent[activeMenu].sideItems : null;
    const sections = activeMenu ? navModalContent[activeMenu].sections : null;
    const regions = isLanguageMenuActive ? Object.keys(languageData) : null;
    const countries = activeRegion ? languageData[activeRegion] : null;

    const openMenu = menu => {
        setIsMenuActive(true);
        setActiveMenu(menu);
    }

    const closeMenu = () => {
        setIsMenuActive(false);
        setActiveMenu(null);
        if (isLanguageMenuActive && !activeRegion && !activeCountry) {
            setIsLanguageMenuActive(false);
        } else if (activeRegion && !activeCountry) {
            setActiveRegion(null);
        } else {
            setActiveCountry(null);
        }
    }

    const regionText = region => {
        if (region === 'northAmerica') {
            return 'North America';
        } else if (region === 'southAmerica') {
            return 'South America';
        } else if (region === 'middleEast') {
            return 'Middle East';
        } else if (region === 'asiaPacific') {
            return 'Asia Pacific';
        } else {
            return region;
        }
    }

    return ReactDOM.createPortal(
        <div className={`mobile-modal ${isVisible ? 'visible' : ''}`}>
            <div id='mobile-close-container'>
                <button type="button" className={`mobile-menu-back mobile ${(isMenuActive || isLanguageMenuActive) ? 'visible' : ''}`} onClick={closeMenu}><FontAwesomeIcon icon={faChevronLeft} style={{ color: "black" }} size="xl" /></button>
                { isMenuActive && <h2 className='mobile-menu-title'>{activeMenu}</h2>}
                { (isLanguageMenuActive && !activeRegion) && <h2 className='mobile-menu-title'>Region & Language</h2>}
                { (activeRegion && !activeCountry) && <h2 className='mobile-menu-title'>{regionText(activeRegion)}</h2>}
                { activeCountry && <h2 className='mobile-menu-title'>{activeCountry.region}</h2>}
                <button type="button" className="modal-close mobile" onClick={() => {onClose(); setTimeout(closeMenu, 1000);}}><FontAwesomeIcon icon={faXmark} style={{ color: "black" }} size="lg" /></button>
            </div>
            { 
                mainItems &&
                <div className="mobile-main-items">
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
                <div className="side-items-menu mobile">
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
                <div className="sections-menu mobile">
                    {
                        sections.map(section => (
                            <div>
                                <ul className="section-links mobile">
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
            {
                (regions && !activeRegion) &&
                <div className="sections-menu mobile">
                    {
                        regions.map(region => (
                            <button className="mobile-menu-button" onClick={() => setActiveRegion(region)} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {regionText(region)}
                                <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", marginLeft: 'auto', paddingRight: 5 }} size="sm" className='deeper-menu' />
                            </button>
                        ))
                    }
                </div>
            }
            {
                (countries && !activeCountry) &&
                <div className="sections-menu mobile">
                    {
                        countries.map(({ region, languages }) => (
                            languages.length > 1 ?
                            <button className="mobile-menu-button" onClick={() => setActiveCountry({ region, languages })} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {region}
                                <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", marginLeft: 'auto', paddingRight: 5 }} size="sm" className='deeper-menu' />
                            </button> :
                            <button className="mobile-menu-button" onClick={() => window.location.href = languages[0].link}>{region}</button>
                        ))
                    }
                </div>
            }
            {
                (activeCountry && (activeCountry.languages.length > 1)) &&
                <div className="sections-menu mobile">
                    {
                        activeCountry.languages.map(({ language, link }) => (
                            <button className="mobile-menu-button" onClick={() => window.location.href = link}>{language}</button>
                        ))
                    }
                </div>
            }
            {
                (!isMenuActive && !isLanguageMenuActive) &&
                <>
                    {
                        Object.keys(navModalContent).map(menu => (
                            <button className="mobile-menu-button" onClick={() => menu !== 'shop' ? openMenu(menu) : window.location.href = 'https://shop.tesla.com/'}>
                                {
                                    menu === 'shop' ? menu :
                                    <div>
                                        {menu}
                                        <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", marginLeft: 'auto', paddingRight: 5 }} size="sm" className='deeper-menu' />
                                    </div>
                                }
                            </button>
                        ))
                    }
                    <button className="mobile-menu-button" onClick={() => window.location.href = 'https://www.tesla.com/support'}>Support</button>
                    <button className="mobile-menu-button language" onClick={() => setIsLanguageMenuActive(true)}>
                        <FontAwesomeIcon icon={faGlobe} size="lg" />
                        <div className='mobile-region-language'>
                            United States
                            <span>English</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", marginLeft: 'auto', paddingRight: 5 }} size="sm" className='deeper-menu' />
                    </button>
                    <button className="mobile-menu-button language" onClick={() => window.location.href = 'https://www.tesla.com/teslaaccount'}>
                        <FontAwesomeIcon icon={faCircleUser} size="lg" />
                        <div className='mobile-region-language'>
                            Account
                        </div>
                    </button>
                </>
            }
        </div>,
        document.getElementById('modal-root')
    );
}

export default MobileModal;