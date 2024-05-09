import React, { useState, useEffect } from 'react';

function RegionCard({ region }) {
    const [ isActive, setIsActive ] = useState(false);
    const locationLinks = region.languages.map(language => language.link);

    useEffect(() => {
        if (locationLinks.includes(window.location.href)) setIsActive(true);
    }, [locationLinks]);

    return (
        <div className={`region-card ${isActive ? 'current' : ''}`}>
            <h6 className='region'>{region.region}</h6>
            { region.languages.map(language => <a className='language' href={language.link}>{language.language}</a>) }
        </div>
    );
}

export default RegionCard;