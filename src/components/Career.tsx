import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Engineering Student</h4>
                <h5>Pursuing Degree</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently focusing on advanced system design, cloud architectures,
              and healthcare technology. Passionate about solving real-world
              problems through scalable backend solutions and data-driven AI systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI System Developer</h4>
                <h5>OmniKavach Project</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Built OmniKavach, a multi-agent AI system for ICU data processing.
              Focused on early risk insight generation and technical reasoning,
              integrating Python-based AI agents with complex healthcare data streams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Health & Management Projects</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Developed various backend applications including Hostel Management
              Systems and EDI Healthcare tools. Mastered Flask, database management (DBMS),
              and API design to build reliable management solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
