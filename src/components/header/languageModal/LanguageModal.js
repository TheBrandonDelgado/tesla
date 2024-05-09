import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { languageData } from './languageModalContent';
import RegionCard from './RegionCard';
import './languageModal.css';

function LanguageModal({ isVisible, onClose }) {
    useEffect(() => {
        const languageModal = document.querySelector(".language-modal");

        if (isVisible) {
            languageModal.classList.add('visible');
        } else {
            languageModal.classList.remove('visible');
        }
    }, [isVisible]);

    return ReactDOM.createPortal(
        <div className='language-modal' onMouseLeave={onClose}>
            <div className='language-left'>
                <h2 className='major-region'>North America</h2>
                { languageData.northAmerica.map(region => <RegionCard region={region} />) }
                <h2 className='major-region'>South America</h2>
                { languageData.southAmerica.map(region => <RegionCard region={region} />) }
                <h2 className='major-region'>Middle-East</h2>
                { languageData.middleEast.map(region => <RegionCard region={region} />) }
            </div>
            <div className='language-middle'>
                <h2 className='major-region'>Asia Pacific</h2>
                { languageData.asiaPacific.map(region => <RegionCard region={region} />) }
            </div>
            <div className='language-right'>
                <h2 className='major-region'>Europe</h2>
                <div className='europe-region-cards'>{ languageData.europe.map(region => <RegionCard region={region} />)}</div>
            </div>
        </div>,
        document.getElementById('modal-root'));
}

export default LanguageModal;