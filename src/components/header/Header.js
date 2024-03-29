import React from 'react';
import logo from './../../assets/tesla-logo.png';
import './header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="tesla-logo" alt="This is a Tesla logo">
                <a href="/">
                    <img className="logo" src={logo} alt="Tesla logo"></img>
                </a>
            </h1>
        </div>
    );
}

export default Header;