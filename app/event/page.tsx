"use client";
import React from "react";
import Link from "next/link";

const CulturalFestival = () => {
  return (
    <>
      <header className="site-header">
        <div>MAA URMILA INTERNATIONAL PUBLIC SCHOOL</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className="page-title">
        <h1>Cultural Festival Details</h1>
        <p>All information about our upcoming cultural festival</p>
      </div>

      <div className="details-box">
        <img
          src="https://www.magicjumprentals.com/clients/3/assets/School%20Carnival.jpg"
          alt="Cultural Festival"
        />

        <h2>Event Overview</h2>
        <p>
          📌 The Cultural Festival is an annual celebration of music, dance,
          drama, and art in our school. Students participate in various
          competitions and performances to showcase their talents.
        </p>

        <h2>Event Details</h2>
        <ul>
          <li>📅 Date: 20 MAR 2026</li>
          <li>⏰ Time: 10:00 AM – 4:00 PM</li>
          <li>📍 Venue: School Auditorium</li>
          <li>🎯 Participants: All students</li>
        </ul>

        <h2>Highlights</h2>
        <ul>
          <li>Dance performances by various classes</li>
          <li>Music concerts and singing competitions</li>
          <li>Drama and skit performances</li>
          <li>Art & craft exhibition</li>
        </ul>

        <Link href="/event-registration" className="btn">
          Register for Event
        </Link>
      </div>

      <footer>
        <p>📍 Lahrpur Road, Vill Patwara, District Sitapur</p>
        <p>📞 +91 6307779480 | ✉ info@maa-urmila-school.com</p>
        <p>© 2026 MAA URMILA INTERNATIONAL PUBLIC SCHOOL</p>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f0f8ff;
          color: #333;
        }

        /* Header */
        .site-header {
          background: #007bff;
          color: white;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .site-header a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          margin-left: 15px;
        }

        /* Page Title */
        .page-title {
          text-align: center;
          padding: 40px 20px 20px;
          color: #007bff;
        }

        .page-title h1 {
          margin: 0;
          font-size: 2.2em;
        }

        .page-title p {
          font-size: 1.1em;
          margin-top: 10px;
          color: #555;
        }

        /* Details Box */
        .details-box {
          max-width: 800px;
          margin: 30px auto 50px;
          background: white;
          padding: 30px 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          line-height: 1.6;
        }

        .details-box img {
          width: 100%;
          max-height: 350px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        /* Button */
        .btn {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1em;
          transition: background 0.3s ease;
        }

        .btn:hover {
          background: #0056b3;
        }

        /* Footer */
        footer {
          background: #222;
          color: #ccc;
          text-align: center;
          padding: 25px 10px;
          margin-top: 50px;
        }

        footer p {
          margin: 5px 0;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .details-box {
            padding: 20px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default CulturalFestival;
