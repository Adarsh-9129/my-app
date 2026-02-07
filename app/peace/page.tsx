"use client";
import React from "react";

const PeaceEducationPage: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="schoolName">Maa Urmila International Public School</div>
        <a href="/" className="homeLink">Home</a>
      </header>

      {/* CONTENT */}
      <section className="section">
        <h1>Peace Education</h1>

        <p>
          Peace Education at Maa Urmila International Public School focuses on
          nurturing values such as tolerance, harmony, respect, and non-violence
          among students.
        </p>

        <p>
          Our programs help students understand the importance of peaceful
          coexistence and develop skills to resolve conflicts through dialogue
          and understanding.
        </p>

        <div className="highlight">
          “Peace is not the absence of conflict, but the ability to handle
          conflict by peaceful means.”
        </div>

        <h2>Our Peace Education Activities</h2>
        <ul>
          <li>🕊️ Value education and moral lessons</li>
          <li>🤝 Conflict resolution and teamwork activities</li>
          <li>🌍 Cultural harmony and unity programs</li>
          <li>🧘 Meditation and mindfulness sessions</li>
          <li>📜 Discussions on ethics, respect, and responsibility</li>
        </ul>

        <p className="closingText">
          Through Peace Education, we aim to create compassionate individuals
          who contribute positively to society and promote harmony in the world.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Maa Urmila International Public School | All Rights Reserved
      </footer>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f0f8ff;
          color: #333;
        }

        .header {
          background: #0056b3;
          color: #ffffff;
          padding: 14px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .schoolName {
          font-weight: bold;
        }

        .homeLink {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
        }

        .homeLink:hover {
          text-decoration: underline;
        }

        .section {
          max-width: 1100px;
          margin: 50px auto;
          padding: 30px;
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        h1 {
          color: #6a1b9a;
          font-size: 2.3em;
          margin-bottom: 15px;
        }

        h2 {
          color: #6a1b9a;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.05em;
          line-height: 1.8;
          color: #444;
          margin-bottom: 15px;
        }

        .highlight {
          background: #f3e8ff;
          color: #4a1366;
          border-left: 6px solid #6a1b9a;
          padding: 20px;
          border-radius: 10px;
          margin: 25px 0;
          font-weight: bold;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          font-size: 1.02em;
          color: #333;
        }

        .closingText {
          margin-top: 25px;
        }

        .footer {
          background: #1f1f1f;
          color: #aaa;
          text-align: center;
          padding: 16px;
          margin-top: 60px;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .section {
            margin: 25px 15px;
            padding: 20px;
          }

          h1 {
            font-size: 1.8em;
          }
        }
      `}</style>
    </>
  );
};

export default PeaceEducationPage;
