import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bas from '../images/Bas.jpg';
import Bass from '../images/Bass.jpg';
import '../styles/NontriGameBas.css';

const NontriGameBas = () => {
    const navigate = useNavigate();

    const images = [Bas, Bass];

    const descriptions = [
        "เข้าร่วมการแข่งขันบาสเก็ตบอล ในงานนนทรีเกมส์ ปี2566รางวัล ชนะเลิศอันดับ 2 ",
        "เข้าร่วมการแข่งขันบาสเก็ตบอล ในงานนนทรีเกมส์ ปี2566รางวัล ชนะเลิศอันดับ 2 "
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
    <div className="nontrigamebas-page">
        <h1 className="nontrigamebas-header-text">นนทรีเกมส์ 2566</h1>
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
                    alt="Nontrigamebas" 
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

export default NontriGameBas;
