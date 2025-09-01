import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bad3 from '../images/Bad3.jpg';
import Badd from '../images/Badd.jpg';
import '../styles/SportsFeastival.css';

const SportsFestival = () => {
    const navigate = useNavigate();

    const images = [Bad3, Badd];

    const descriptions = [
        "เข้าร่วมการแข่งขันแบดมินตันของคณะ",
        "รางวัล ชนะเลิศอันดับ 2 ประเภทหญิงคู่"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % images.length 
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length 
        );
    };

    return (
    <div className="sportsfestival-page">
        <h1 className="sportsfestival-header-text">เทศกาลกีฬาศรัทธาศรีเทาเงินเกมส์</h1>
        <button onClick={() => navigate(-1)} className="back-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </button>

        <div className="gallery-container">
            {/* CORRECTED: Changed class name here */}
            <button onClick={prevImage} className="gallery-nav-btn gallery-nav-btn-left">
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="gallery-image-box">
                <img 
                    src={images[currentImageIndex]} 
                    alt="Sportsfestival" 
                    className={`dynamic-image image-${currentImageIndex}`}
                />
            </div>

            <button onClick={nextImage} className="gallery-nav-btn">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>

        <div className="description-box">
            <p>
                {descriptions[currentImageIndex]}
            </p>
        </div>
    </div>
    );
};

export default SportsFestival;
