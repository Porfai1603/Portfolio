import React, { useState } from "react";
import '../styles/AboutMe.css'
import Photo from '../images/รูปเสื้อขาว.jpg';
import resumeFile from '../images/Resume_Thunyaporn_Suwanpadit.png';

function AboutMe() {
  const [showToast, setShowToast] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("061-720-1616");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); 
  };

  return (
    <div className="about-page">
      {/* Intro Section */}
      <div className="intro-section">
        <div className="left">
          <h1>Thunyaporn Suwanpadit</h1>
          <h2>Porfai</h2>
          <p>
            I am a front-end developer who loves to create beautiful and user-friendly websites. 
            With experience in HTML, CSS, JavaScript and modern frameworks, I focus on combining design and functionality. 
            Although I am not very good at it yet, I still have to learn more, but I am committed to continuous improvement and am open to learning new things for opportunities to develop my skills.
          </p>          
          <a href={resumeFile} download className="resume-btn">
            ดาวน์โหลด Resume
          </a>
        </div>

        <div className="right">
          <div className="profile-box">
            <img src={Photo} alt="Profile" className="profile-img" />
            <div className="info-card top-left">🎂 16/06/03</div>
            <a href="mailto:porfaisuwanpadit@gmail.com" className="info-card top-right">
              📩 porfaisuwanpadit@gmail.com
            </a>
            <div className="info-card bottom-left" onClick={copyPhoneNumber} style={{cursor:"pointer"}}>
              📞 061-720-1616 (copy)
            </div>
            <div className="info-card bottom-right">
              🎓 Kasetsart University
              <br />
              Bachelor of Science (Computer Science)
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>

        <div className="skill-group">
          <h3>Computer Languages</h3>
          <div className="skills-icons">
            <img src="/images/HTML.png" alt="HTML"/>
            <img src="/images/CSS.png" alt="CSS"/>
            <img src="/images/JavaScript.png" alt="JavaScript"/>
            <img src="/images/Sql.png" alt="Sql"/>
          </div>
        </div>

        <div className="skill-group">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-icons">
            <img src="/images/React.png" alt="React"/>
            <img src="/images/bootstrap.png" alt="bootstrap"/>
            <img src="/images/react-native.png" alt="react-native"/>
            <img src="/images/Nodejs.png" alt="Nodejs"/>
          </div>
        </div>

        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skills-icons">
            <img src="/images/figma.png" alt="figma"/>
            <img src="/images/VisualStudio.png" alt="VisualStudio"/>
            <img src="/images/WordPress.png" alt="WordPress"/>
            <img src="/images/Postman.png" alt="Postman"/>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && <div className="toast">คัดลอกเบอร์โทรเรียบร้อย!</div>}
    </div>
  );
}

export default AboutMe;
