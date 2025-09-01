import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Nonc from '../images/Nonc.jpg';
import Noncc from '../images/Noncc.jpg';
import '../styles/NontriGameBad.css';

const NontriGameBad = () => {
    const navigate = useNavigate();

    const images = [Nonc, Noncc];

    const descriptions = [
        "เข้าร่วมการแข่งขันแบดมินตัน ในงานนนทรีเกมส์ ปี2567 รางวัล ชนะเลิศอันดับ 1 ประเภทหญิงคู่",
        "เข้าร่วมการแข่งขันแบดมินตัน ในงานนนทรีเกมส์ ปี2567 รางวัล ชนะเลิศอันดับ 1 ประเภทหญิงคู่"
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
    <div className="nontrigamebad-page">
        <h1 className="nontrigamebad-header-text">นนทรีเกมส์ 2567</h1>
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
                    alt="NontriGameBad" 
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

export default NontriGameBad;
