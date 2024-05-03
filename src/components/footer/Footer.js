import React from 'react';
import './footer.css';

const footerLinks = [
    {
        text: 'Tesla © 2024',
        link: 'https://www.tesla.com/about'
    },
    {
        text: 'Privacy & Legal',
        link: 'https://www.tesla.com/legal'
    },
    {
        text: 'Vehicle Recalls',
        link: 'https://www.tesla.com/vin-recall-search'
    },
    {
        text: 'Contact',
        link: 'https://www.tesla.com/contact'
    },
    {
        text: 'News',
        link: 'https://www.tesla.com/blog'
    },
    {
        text: 'Get Updates',
        link: 'https://www.tesla.com/updates'
    },
    {
        text: 'Locations',
        link: 'https://www.tesla.com/findus/list'
    }
]

function Footer() {
    return (
        <div className='footer'>
            { footerLinks.map(link => <a className='footer-link' href={link.link}>{link.text}</a>) }
        </div>
    );
}

export default Footer;