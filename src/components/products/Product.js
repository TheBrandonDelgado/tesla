import React from 'react';
import './Products.css';

function Product({ product }) {
    const { title, subTitle, subTitleLink, description, color, image, mobileImage, buttons, disclaimer, disclaimerLink, disclaimerColor } = product;

    return (
        <div className={`product-container ${color}`} style={ window.innerWidth > 600 ? { backgroundImage: `url(${image})` } : { backgroundImage: `url(${mobileImage})`, 'background-position-y': '30%' } }>
            <div className='product-headline'>
                <h1 className='product-title'>{title}</h1>
                { subTitle && !subTitleLink ? <p className='product-subtitle'>{subTitle}</p> : false }
                { subTitle && subTitleLink ? <a href={subTitleLink} className='product-subtitle-link'>{subTitle}</a> : false }
                { description && <p className='product-description'>{description}</p> }
            </div>
            <div className='product-actions'>
                <div className='product-buttons'>
                    {
                        buttons.map((button, index) => (
                            <a className={`product-button-${index + 1}`} href={button.link}>{button.text}</a>
                        ))
                    }
                </div>
                { disclaimer && <p className={`product-disclaimer ${disclaimerColor}`}>{disclaimer}</p> }
                { disclaimerLink && <a className={`product-disclaimer-link ${disclaimerColor}`} href={disclaimerLink.link}>{disclaimerLink.text}</a> }
            </div>
        </div>
    );
}

export default Product;