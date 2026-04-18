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
                <h5>DES Pune University (DESPU)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing a degree in Computer Engineering with a focus on Java,
              C++, and Data Structures & Algorithms. Coordinator and founding
              member of the <strong>AWS Cloud Club — DESPU</strong>, leading the
              student cloud community at university.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OmniKavach — ICU AI System</h4>
                <h5>IGNISIA 26 · National-Level AI Hackathon, MIT-WPU</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Built an autonomous multi-agent clinical assistant for ICU data
              in 24 hours. Capable of parallel patient data processing, early
              warning detection for sepsis and multi-organ failure using MIMIC-III
              clinical protocols, Evidence-Based RAG, and a live React dashboard.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sentinel — Kernel Guard</h4>
                <h5>TechVortex 3.0 · Top 50 Finalist (150+ teams)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a behaviour-based real-time ransomware protection system
              using eBPF for kernel-level monitoring, Groq LLaMA for AI pattern
              recognition, and automated SIGKILL response with Node.js. Achieved
              Top 50 Finalist recognition out of 150+ competing teams.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
