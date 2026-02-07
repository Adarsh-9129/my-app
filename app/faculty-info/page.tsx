"use client";
import React from "react";
import Link from "next/link";

const FacultyPage = () => {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <Link href="/" className="logo">
          MAA URMILA INTERNATIONAL PUBLIC SCHOOL
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* TOP BANNER (NEW ADD) */}
      <section className="page-banner">
        <div className="banner-overlay">
          <h1>Faculty Introduction</h1>
          <p>
            <Link href="/">Home</Link> &nbsp; | &nbsp;
            <Link href="/faculty">Faculty</Link> &nbsp; | &nbsp;
            Faculty Introduction
          </p>
        </div>
      </section>

      {/* Principal */}
      <section className="container">
        <div className="principal">
          <img
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1753648657/grandprairieisd/gi2ce9qytx4qgx44xoey/DexterDixonPrincipal2024.png"
            alt="Principal"
          />
          <div>
            <h2>Mrs. Sukiriti Mala</h2>
            <p><strong>Principal</strong></p>
            <p>
              With over 12 years of experience in education, Mrs. Sukiriti Mala
              leads the institution with vision, discipline, and a commitment to
              holistic learning.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="container">
        <h1>Faculty & Staff</h1>
        <p>Meet our dedicated team of educators and support staff.</p>

        <div className="faculty">
          <div className="staff-card">
            <img src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3789806409622837665" />
            <h3>John Doe</h3>
            <p><strong>Principal</strong></p>
            <p>🎓 M.Ed</p>
            <p>⏳ 20+ Years</p>
          </div>

          <div className="staff-card">
            <img src="https://images.squarespace-cdn.com/content/v1/53da9479e4b0acb5ce32b79b/1589340198841-EKS6YEJK50OLBEFU4HZ9/faculty-portraits.jpg" />
            <h3>Jane Smith</h3>
            <p><strong>Science Teacher</strong></p>
            <p>🎓 PhD Biology</p>
            <p>⏳ 12 Years</p>
          </div>

          <div className="staff-card">
            <img src="https://www.episcopalbr.org/uploads/images/News/2024_2025/Faculty-and-staff/welcome.png" />
            <h3>Alex Johnson</h3>
            <p><strong>Math Teacher</strong></p>
            <p>🎓 M.Sc Mathematics</p>
            <p>⏳ 15 Years</p>
          </div>

          <div className="staff-card">
            <img src="https://a82c1e21884836366a71.cdn6.editmysite.com/uploads/b/a82c1e21884836366a7195a057cb4ae31544737bdd3e4effbc7f5b4407e74d29/Sanders_1748968979.jpg" />
            <h3>Emily Brown</h3>
            <p><strong>Administrative Staff</strong></p>
            <p>🎓 MBA</p>
            <p>⏳ 8 Years</p>
          </div>

          <div className="staff-card">
            <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1753648657/grandprairieisd/gi2ce9qytx4qgx44xoey/DexterDixonPrincipal2024.png" />
            <h3>Michael Lee</h3>
            <p><strong>English Teacher</strong></p>
            <p>🎓 M.A English</p>
            <p>⏳ 10 Years</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container box">
        <h2>Our Teaching Philosophy</h2>
        <p>
          Our faculty believes in student-centered learning, moral values,
          discipline, and nurturing creativity and curiosity in every child.
        </p>
      </section>

      {/* Achievements */}
      <section className="container box">
        <h2>Faculty Achievements</h2>
        <ul>
          <li>🏆 Best Teacher Award – 2024</li>
          <li>📘 Research Publications</li>
          <li>🥇 District Level Academic Excellence</li>
          <li>🎤 Regular Professional Training Programs</li>
        </ul>
      </section>

      {/* Careers */}
      <section className="container box careers">
        <h2>Join Our Team</h2>
        <p>We welcome passionate educators to join our institution.</p>
        <p><strong>Email CV at:</strong> careers@maa-urmila-school.com</p>
      </section>

      <style jsx global>{`
        body {
          font-family: "Segoe UI", Arial, sans-serif;
          margin: 0;
          background: linear-gradient(180deg, #eef5ff, #ffffff);
        }

        .site-header {
          background: linear-gradient(90deg, #007bff, #0056b3);
          color: white;
          padding: 14px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .logo {
          font-size: 1.2em;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          margin-left: 20px;
        }

        .page-banner {
          height: 320px;
          background-image: url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b");
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.65),
            rgba(0, 85, 180, 0.6)
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
        }

        .banner-overlay h1 {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .banner-overlay p {
          font-size: 15px;
          font-weight: 600;
        }

        .banner-overlay a {
          color: #ffd700;
          text-decoration: none;
        }

        .container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 20px;
        }

        .principal {
          background: white;
          border-radius: 18px;
          padding: 30px;
          display: flex;
          gap: 30px;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .principal img {
          width: 190px;
          height: 190px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid #007bff;
        }

        .principal h2 {
          color: #0056b3;
        }

        .faculty {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .staff-card {
          background: white;
          border-radius: 18px;
          padding: 25px 20px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: 0.35s;
          position: relative;
        }

        .staff-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 6px;
          width: 100%;
          background: linear-gradient(90deg, #007bff, #00c6ff);
          border-radius: 18px 18px 0 0;
        }

        .staff-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.35);
        }

        .staff-card img {
          width: 145px;
          height: 145px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: 10px;
        }

        .staff-card h3 {
          color: #007bff;
        }

        .box {
          background: white;
          border-radius: 18px;
          padding: 30px;
          margin-top: 40px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .box h2 {
          color: #0056b3;
        }

        .careers {
          text-align: center;
          background: #eaf4ff;
        }
      `}</style>
    </>
  );
};

export default FacultyPage;
