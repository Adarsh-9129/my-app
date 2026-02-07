"use client";
import React from "react";

const MusicEducationPage: React.FC = () => {
  return (
    <>
      <header className="header">
        <h1>Maa Urmila International Public School</h1>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <h2>Music Education</h2>
          <p>Nurturing creativity, confidence & cultural values</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section light">
        <div className="container">
          <h3>About Music Education</h3>
          <p>
            At Maa Urmila International Public School, Music Education plays an
            important role in the holistic development of our students.
          </p>
          <p>
            Music helps children express themselves, build confidence, improve
            concentration, and develop emotional intelligence.
          </p>

          <div className="highlight">
            “Music gives a soul to the universe, wings to the mind, and life to
            everything.”
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="section white">
        <div className="container">
          <h3>Our Music Program</h3>

          <div className="grid">
            <div className="card">
              <h4>🎶 Vocal Music</h4>
              <p>
                Training in vocal techniques, breathing control, patriotic,
                devotional and folk songs.
              </p>
            </div>

            <div className="card">
              <h4>🎹 Instrumental Music</h4>
              <p>
                Introduction to keyboard, harmonium, tabla and percussion
                instruments.
              </p>
            </div>

            <div className="card">
              <h4>🎤 Stage Performance</h4>
              <p>
                Performances in assemblies, annual functions and competitions to
                build confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section light">
        <div className="container">
          <h3>Benefits of Music Education</h3>
          <ul>
            <li>Enhances creativity and imagination</li>
            <li>Improves memory and focus</li>
            <li>Boosts confidence and self-expression</li>
            <li>Encourages discipline and teamwork</li>
            <li>Promotes cultural values</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Maa Urmila International Public School | Music Education
      </footer>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f8ff;
          color: #222;
        }

        .header {
          background: #0056b3;
          color: #fff;
          padding: 16px 25px;
        }

        .hero {
          background: url("https://images.unsplash.com/photo-1511379938547-c1f69419868d")
            center/cover no-repeat;
          height: 300px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
        }

        .heroContent {
          position: relative;
          color: #ffffff;
          text-align: center;
        }

        .heroContent h2 {
          font-size: 2.4em;
          margin-bottom: 10px;
        }

        .section {
          padding: 60px 20px;
        }

        .light {
          background: #f4f8ff;
        }

        .white {
          background: #ffffff;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        h3 {
          color: #0056b3;
          font-size: 2em;
          margin-bottom: 15px;
        }

        p,
        li {
          color: #333;
          font-size: 1.05em;
          line-height: 1.8;
        }

        .highlight {
          background: #e6f0ff;
          color: #003366;
          padding: 20px;
          border-left: 5px solid #0056b3;
          border-radius: 8px;
          margin-top: 25px;
          font-weight: bold;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card h4 {
          color: #0056b3;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
        }

        .footer {
          background: #1f1f1f;
          color: #ccc;
          text-align: center;
          padding: 18px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .heroContent h2 {
            font-size: 1.8em;
          }
        }
      `}</style>
    </>
  );
};

export default MusicEducationPage;

