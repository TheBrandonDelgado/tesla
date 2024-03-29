import React, { useState, useEffect } from 'react';
import './heroBanner.css';
import Modal from './../modal/Modal';
import { modalContent } from './../modal/modalContent';

function HeroBanner() {
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ isModelYModalOpen, setIsModelYModalOpen ] = useState(false);
    const [ isSuperchargingModalOpen, setIsSuperchargingModalOpen ] = useState(false);
    const [ prevScrollPos, setPrevScrollPos ] = useState({ x: 0, y: 0 });

    const openModelYModal = () => {
        setIsModelYModalOpen(true);
        setPrevScrollPos({ x: window.scrollX, y: window.scrollY });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // This makes the scroll smooth
          });
    }
    const openSuperchargingModal = () => {
        setIsSuperchargingModalOpen(true);
        setPrevScrollPos({ x: window.scrollX, y: window.scrollY });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // This makes the scroll smooth
          });
    }        
    const closeModal = () => {
        setIsModelYModalOpen(false);
        setIsSuperchargingModalOpen(false);
        window.scrollTo({
            top: prevScrollPos.y,
            left: prevScrollPos.x,
            behavior: 'smooth'
          });
    }

    const slidesData = [
        {
            id: 1,
            title: "Model Y Starting at $36,490 After Federal Tax Credit",
            subtitle: <h2><p>Eligible buyers qualify for a $7,500 federal tax credit. Applied at time of Model Y delivery. <button className="modal-link" type="button" onClick={openModelYModal}>See Details</button></p><p>Prices will increase by $1,000 for all Model Y trims on April 1.</p></h2>,
            videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Homepage-Model-Y-Promo-Desktop-v2.mp4",
            poster: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Promo-Desktop-Poster.jpg",
            ctaPrimary: {
                href: "https://www.tesla.com/inventory/new/my",
                label: "Shop Available"
            },
            ctaSecondary: {
                href: "https://www.tesla.com/drive?SelectedModel=ModelY",
                label: "Demo Drive"
            }
        },
        {
            id: 2,
            title: "5,000 Free Supercharging Miles",
            subtitle: <h2><p>Take delivery of a new Model S, Model X or Model Y by March 31 and receive 5,000 free Supercharging miles for cash or finance purchases. <button className="modal-link" type="button" onClick={openSuperchargingModal}>See Terms</button></p></h2>,
            videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Supercharger-Main-Hero-Desktop-1920x1080.mp4",
            poster: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Supercharging-Poster-Desktop.jpg",
            ctaPrimary: {
                href: "https://www.tesla.com/inventory/new/my",
                label: "Shop Available"
            }
        },
        {
            id: 3,
            title: "New Model 3",
            subtitle: <h2><p>Reengineered from the ground up.</p><p>Be the first to get behind the wheel. Demo drive now.</p></h2>,
            videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Homepage-Model-3-Promo-Desktop.mp4",
            poster: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Promo-Desktop-Poster.jpg",
            ctaPrimary: {
                href: "https://www.tesla.com/drive?selectedModel=model3",
                label: "Demo Drive"
            },
            ctaSecondary: {
                href: "https://www.tesla.com/model3/design#overview",
                label: "Custom Order"
            }
        },
        {
            id: 4,
            title: "Find the Tesla for You",
            subtitle: <h2><p>Discover which model is best for you based on your budget, driving habits and lifestyle.</p></h2>,
            videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto/Homepage-Help-Me-Choose-Promo-Desktop-v2.mp4",
            poster: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Help-Me-Choose-Promo-Desktop-Poster.jpg",
            ctaPrimary: {
                href: "https://www.tesla.com/choose",
                label: "Help Me Choose"
            }
        }
    ];

    const handleSelectSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isModelYModalOpen && !isSuperchargingModalOpen) {
                setCurrentSlide(() => (currentSlide + 1) % slidesData.length);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentSlide, slidesData.length, isModelYModalOpen, isSuperchargingModalOpen]);

    return (
        <div className={`hero-slides ${(isModelYModalOpen || isSuperchargingModalOpen) && 'blur'}`}>
            {slidesData.map((slide, index) => (
                <div key={slide.id} className={`hero-slide ${index === currentSlide ? 'hero-slide--active' : ''}`}>
                    <div className="hero-slide-video">
                        <video preload="auto" poster={slide.poster} autoPlay playsInline loop muted className="hero-slide-media">
                            <source src={slide.videoSrc} type="video/mp4" />
                        </video>
                    </div>
                    
                    <div className="hero-slide-content">
                        <h1>{slide.title}</h1>
                        {slide.subtitle}
                        <a href={slide.ctaPrimary.href} target="_blank" rel="noreferrer"><button className="cta-primary">{slide.ctaPrimary.label}</button></a>
                        { slide.ctaSecondary && <a href={slide.ctaSecondary.href} target="_blank" rel="noreferrer"><button className="cta-secondary">{slide.ctaSecondary.label}</button></a> }
                    </div>
                    
                </div>
            ))}
            <div className="hero-tab-list" role="tablist">
                {slidesData.map((_, index) => (
                    <button key={index} className={`tab ${index === currentSlide ? 'tab--active' : ''}`} onClick={() => handleSelectSlide(index)}></button>
                ))}
            </div>
            {
                modalContent.map(item => (
                    <Modal content={item.content} id={item.id} isOpen={item.id === 'model-y-incentives' ? isModelYModalOpen : isSuperchargingModalOpen} onClose={closeModal} />
                ))
            }
        </div>
    )
}

export default HeroBanner;