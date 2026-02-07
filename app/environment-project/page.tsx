"use client";
import React from "react";
import Link from "next/link";

const EnvironmentProject = () => {
  return (
    <>
      <header className="header">
        <div>Maa Urmila International Public School</div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </header>

      <section className="section">
        <h1>Environment Project</h1>

        <p>
          Maa Urmila International Public School is deeply committed to promoting
          environmental awareness and sustainable living among students.
        </p>

        <p>
          Our Environment Project initiatives help students understand the
          importance of protecting nature and conserving natural resources for
          future generations.
        </p>

        <div className="highlight">
          <p>
            “The environment is where we all meet; where we all have a mutual
            interest; it is the one thing all of us share.”
          </p>
        </div>

        <h2 className="subHeading">Our Environmental Initiatives</h2>

        <ul>
          <li>🌳 Tree plantation drives</li>
          <li>♻️ Waste segregation and recycling programs</li>
          <li>💧 Water conservation awareness</li>
          <li>🌍 Clean campus and plastic-free campaigns</li>
          <li>🔋 Energy saving and eco-friendly practices</li>
        </ul>

        <p className="bottomText">
          Through these projects, students develop responsibility towards nature
          and learn how small actions can create a big positive impact on the
          planet.
        </p>
      </section>

      <footer className="footer">
        © 2026 Maa Urmila International Public School | All Rights Reserved
      </footer>

      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          background: #f0f8ff;
          color: #333;
        }

        /* HEADER */
        .header {
          background: #007bff;
          color: #fff;
          padding: 12px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        /* PAGE CONTENT */
        .section {
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .section h1 {
          color: #0a5f30;
          font-size: 2.3em;
          margin-bottom: 15px;
        }

        .section p {
          font-size: 1.05em;
          line-height: 1.8;
          margin-bottom: 15px;
          color: #444;
        }

        /* HIGHLIGHT BOX */
        .highlight {
          background: #f0f8ff;
          border-left: 6px solid #28a745;
          padding: 20px;
          border-radius: 10px;
          margin: 25px 0;
        }

        /* LIST */
        ul {
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }

        .subHeading {
          color: #28a745;
        }

        .bottomText {
          margin-top: 25px;
        }

        /* FOOTER */
        .footer {
          background: #222;
          color: #aaa;
          text-align: center;
          padding: 15px;
          margin-top: 60px;
          font-size: 13px;
        }
      `}</style>
    </>
  );
};

export default EnvironmentProject;
