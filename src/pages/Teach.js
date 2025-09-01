import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Teach1 from '../images/Teach1.jpg';
import Teach2 from '../images/Teach2.jpg';
import Teach3 from '../images/Teach3.jpg'
import '../styles/Teach.css';

const Teach = () => {
    const navigate = useNavigate();

    const images = [Teach1, Teach2, Teach3];

    const descriptions = [
        "จัดขึ้นเพื่อมอบความรู้ ความสุข และความสนุกให้น้อง ๆ จากโรงเรียนต่าง ๆ ที่เข้าร่วมกิจกรรม ",
        "เสริมทักษะภาษาไทย ฝึกคิดไว จำคำและจัดหมวดหมู่คำอย่างสนุกสนาน ",
        "ได้ร่วมทำกิจกรรมกับเพื่อน ๆ พี่ ๆ น้อง ๆ ต่างคณะ "
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
    <div className="teach-page">
        <h1 className="teach-header-text">กิจกรรมมอบความสุขให้น้องๆ</h1>
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
                    alt="teachimg" 
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

export default Teach;
