import React, { useState } from 'react';
import '../styles/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CatImage from '../images/แมวหา.png'; 

const Project = () => {
  const projects = [
    { 
      title: "Thai Meow Application", 
      description: "แอปเรียนภาษาไทยสำหรับผู้เริ่มต้นและชาวต่างชาติ ช่วยให้ชาวต่างชาติเริ่มต้นเรียนรู้ภาษาไทยได้ง่ายขึ้นผ่านบทเรียนและคำศัพท์",
      details: [
        "ออกแบบแผนผังโฟลว์ระบบ (DFD)",
        "พัฒนากลุ่มข้อมูล และโครงสร้างฐานข้อมูล",
        "สร้าง UI/UX โดยใช้ Figma",
        "พัฒนาส่วน front-end ด้วย JavaScript"
      ],
      linkTitle: "🔗Figma design",
      linkUrl: "https://www.figma.com/design/th62yalRs3xKXILvM8DOHl/Thaimeow?node-id=0-1&p=f&t=POgNV7gb6Jkf3yPB-0"
    },
    { 
      title: "Badminton Application", 
      description: "แอปพลิเคชันสำหรับจองสนามแบดมินตันในมหาวิทยาลัย",
      details: [
        "ออกแบบและพัฒนาระบบเพื่อตรวจสอบการเข้าถึงโดยบุคคลภายนอก และแจ้งเหตุการณ์ต่าง ๆ",
        "ออกแบบ UI/UX โดยใช้ Figma สำหรับจองสนามแบดมินตัน",
        "พัฒนาซอฟต์แวร์ส่วนหน้าของแอป ด้วย JavaScript"
      ],
      linkTitle: "🔗Figma design",
      linkUrl: "https://www.figma.com/design/0tTcadNzv3zi7lscbMz72D/badmintonapp?node-id=3032-2305&p=f&t=VZ9dQkKDFkgsookr-0"
    },
    { 
      title: "System Analysis (SA)", 
      description: "ระบบแจ้งเตือนบุคคลภายนอกและแจ้งเหตุการณ์ของตึกคณะ",
      details: [
        "สร้าง ERD และ DFD สำหรับการวางแผนระบบและการจัดทำเอกสาร",
        "พัฒนาพจนานุกรมข้อมูลเพื่อทำให้องค์ประกอบข้อมูลระบบเป็นมาตรฐาน"
      ],
      linkTitle: "SA",
      linkUrl: "#"
    },
    { 
      title: "Fundamentals of Database Systems", 
      description: "ฐานข้อมูลระบบรถตู้โดยสาร (บขส.)",
      details: [
        "ออกแบบฐานข้อมูล (รวมถึง ER Diagram และ Data Dictionaries)",
        "วิเคราะห์และออกแบบระบบ (รวมถึง Data Flow Diagram)"
      ],
      linkTitle: "Database",
      linkUrl: "#"
    },
    { 
      title: "Portfolio", 
      description: "ทำขึ้นเพื่อสร้างเว็บไซต์ ระบบเพื่อรวบรวมและนำเสนอผลงานและโปรเจคอย่างเป็นระเบียบและน่าสนใจ",
      details: [
        "ออกแบบ UI/UX ของเว็บไซต์เพื่อให้ผู้ใช้งานเข้าใจง่ายและสวยงาม โดยใช้ Figma",
        "พัฒนาหน้าโปรเจคแต่ละหน้าโดยใช้ HTML, CSS, JavaScript และ React สำหรับสร้างส่วนติดต่อผู้ใช้แบบ interactive และ responsive"
      ],
      linkTitle: "🔗Figma design",
      linkUrl: "https://www.figma.com/design/2butcPQ5ChE8qTnKBIp5m8/port?node-id=803-5&t=2mqBdFqJJ9cHlPlj-1"
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="project-page">
      <h1 className="project-header-text">My Projects</h1>

      <div className="projects-cards-container">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`projects-card ${activeProject === index ? 'active' : activeProject !== null ? 'inactive' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-top-row">
              <div className="card-icon-circle">
                <FontAwesomeIcon icon={faFolderOpen} className="projects-icon" />
              </div>
              <p className="projects-title">{proj.title}</p>
            </div>

            {activeProject === index && (
              <div className="project-details-container">
                <div className="project-details-main">
                  <h2 className="project-details-title">{proj.title}</h2>
                  <p className="project-details-desc">{proj.description}</p>
                  <h3 className="project-details-subtitle">ส่วนที่ได้รับมอบหมาย</h3>
                  <ul className="project-details-list">
                    {proj.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-details-link-box">
                  <a 
                    href={proj.linkUrl} 
                    className="project-details-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {proj.linkTitle}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cat Image: แสดงเฉพาะเมื่อยังไม่ได้เลือกโปรเจค */}
      {activeProject === null && (
        <div className="cat-image-container">
          <img src={CatImage} alt="แมวหา" className="cat-image" />
        </div>
      )}
    </div>
  );
};

export default Project;
