import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BigFam from '../images/BigFam.png';
import BigFamm from '../images/BigFamm.jpg';
import '../styles/Bigfamily.css';

const Bigfamily = () => {
    const navigate = useNavigate();

    const images = [BigFam, BigFamm];

    const descriptions = [
        "กิจกรรมละลายพฤติกรรมสร้างความสนุกสนานและความผูกพันธ์ 🤝", 
        "เป็นทีมงานช่วยกันจัดเตรียม สถานที่และอุปกรณ์" 
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
        <div className="bigfamily-page">
            <h1 className="bigfamily-header-text">Bigfamily</h1>
            <button onClick={() => navigate(-1)} className="back-btn">
                <FontAwesomeIcon icon={faArrowLeft} /> Go Back
            </button>

            <div className="gallery-container">
                <button onClick={prevImage} className="gallery-nav-btn gallery-nav-btn-left">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="gallery-image-box">
                    <img 
                        src={images[currentImageIndex]} 
                        alt="Bigfamily" 
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

export default Bigfamily;