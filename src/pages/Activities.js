import React from 'react';
import '../styles/Activities.css';
import BigFamily from '../images/Bigfamily.png';
import NontriGame from '../images/Nonbad.png';
import NontriGames from '../images/Nonbas.png';
import SportsFestival from '../images/SportsFestival.png';
import Teach from '../images/teach.png';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className="activities-page">
      <div className="activities-header">
        <p className="subtitle">WHAT I DO?</p>
        <h2 className="title">Activities at the university</h2>
      </div>

      <div className="activities-grid">

        <div className='top'>
          <Link to="/bigfamily" className='card-link'>
            <div className="activity-card">
              <img src={BigFamily} alt="Bigfamily" />
              <p className="activity-name">Bigfamily</p>
            </div>
          </Link>

          <Link to="/nontrigamebad" className='card-link'>
            <div className="activity-card">
              <img src={NontriGame} alt="Nontrigame2567" />
              <p className="activity-name">นนทรีเกมส์ ปี2567</p>
            </div>
          </Link>

          <Link to="/sportsfestival" className='card-link'>
            <div className="activity-card">
              <img src={SportsFestival} alt="เทศกาลกีฬาศรีเทาเงินเกมส์" />
              <p className="activity-name">เทศกาลกีฬาศรีเทาเงินเกมส์</p>
            </div>
          </Link>
        </div>
        
        <div className='Bottom'>

          <Link to="/nontrigamebas" className='card-link'>
            <div className="activity-card">
              <img src={NontriGames} alt="Nontrigame2566" />
              <p className="activity-name">นนทรีเกมส์ ปี2566</p>
            </div>
          </Link>

          <Link to="/teach" className='card-link'>
            <div className="activity-card">
              <img src={Teach} alt="กิจกรรมมอบความสุขให้น้องๆ" />
              <p className="activity-name">กิจกรรมมอบความสุขให้น้องๆ</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activities;