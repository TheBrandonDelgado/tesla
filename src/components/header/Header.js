import React from 'react';
import logo from './../../assets/tesla-logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="header">
            <h1 className="tesla-logo" alt="This is a Tesla logo">
                <a href="/">
                    <img className="logo" src={logo} alt="Tesla logo"></img>
                </a>
            </h1>
            <ol id="menu-items-middle">
                <li>
                    <button>
                        <span>Vehicles</span>
                    </button>
                </li>
                <li>
                    <button>
                        <span>Energy</span>
                    </button>
                </li>
                <li>
                    <button>
                        <span>Charging</span>
                    </button>
                </li>
                <li>
                    <button>
                        <span>Discover</span>
                    </button>
                </li>
                <li>
                    <button>
                        <span>Shop</span>
                    </button>
                </li>
            </ol>
            <ol id="menu-items-end">
                <li>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#ffffff'}} size="lg" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGlobe} style={{ color: '#ffffff'}} size="lg" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleUser} style={{ color: '#ffffff'}} size="lg" />
                </li>
            </ol>
        </div>
    );
}

export default Header;