"use client";
import React from "react";
import Link from "next/link";

const EventsPage = () => {
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

      <div className="notice">
        🔔 Admissions Open for Session 2026–27 | Apply Now!
      </div>

      <section className="events">
        <h1>School Events & Activities</h1>
        <p>Explore our academic, cultural and sports events</p>

        <div className="past-events-container">
          {/* Event 1 */}
          <div className="event-card featured">
            <div className="date-badge">15 FEB 2026</div>
            <h2>Annual Sports Day</h2>
            <p>⏰ <span>9:00 AM – 3:00 PM</span></p>
            <p>📍 <span>School Playground</span></p>
            <Link href="/event-register" className="btn">
              Register Now
            </Link>
          </div>

          {/* Event 2 */}
          <div className="event-card">
            <div className="date-badge">20 MAR 2026</div>
            <h2>Cultural Festival</h2>
            <p>⏰ <span>10:00 AM – 4:00 PM</span></p>
            <p>📍 <span>School Auditorium</span></p>
            <Link href="/event-details" className="btn">
              View Details
            </Link>
          </div>

          {/* Event 3 */}
          <div className="event-card">
            <div className="date-badge">10 APR 2026</div>
            <h2>Science Fair</h2>
            <p>⏰ <span>11:00 AM – 2:00 PM</span></p>
            <p>📍 <span>Science Block</span></p>
            <Link href="/science-projects" className="btn">
              Explore Projects
            </Link>
          </div>
        </div>

        {/* Past Events */}
        <div className="past-events">
          <h2>Past Events</h2>
          <div className="past-events-container">
            <div className="event-card">
              <div className="date-badge">10 DEC 2025</div>
              <h2>Christmas Celebration</h2>
              <p>📍 School Auditorium</p>
              <p>
                Students and staff celebrated with music, skits, and festive
                decorations.
              </p>
            </div>

            <div className="event-card">
              <div className="date-badge">15 AUG 2025</div>
              <h2>Independence Day</h2>
              <p>📍 School Ground</p>
              <p>
                Flag hoisting ceremony and cultural performances by students.
              </p>
            </div>

            <div className="event-card">
              <div className="date-badge">05 SEP 2025</div>
              <h2>Teachers’ Day</h2>
              <p>📍 School Hall</p>
              <p>
                Students honored teachers with performances and awards.
              </p>
            </div>
          </div>
        </div>
      </section>

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
        }

        .site-header {
          background: #007bff;
          color: white;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .site-header a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          margin-left: 15px;
        }

        .notice {
          background: #ffeb3b;
          padding: 10px;
          text-align: center;
          font-weight: bold;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.5; }
        }

        .events {
          max-width: 1200px;
          margin: 30px auto;
          padding: 20px;
        }

        .events h1 {
          text-align: center;
          color: #007bff;
          font-size: 32px;
        }

        .events p {
          text-align: center;
          font-size: 18px;
          color: #333;
        }

        .event-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: 0.3s;
        }

        .event-card:hover {
          transform: translateY(-4px);
        }

        .event-card.featured::before {
          content: "FEATURED";
          position: absolute;
          top: 15px;
          right: -10px;
          background: #ff4d4d;
          color: white;
          padding: 5px 15px;
          transform: rotate(45deg);
          font-size: 12px;
          font-weight: bold;
        }

        .date-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #007bff;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
        }

        .btn {
          display: inline-block;
          margin-top: 12px;
          background: #007bff;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
        }

        .btn:hover {
          background: #0056b3;
        }

        .past-events {
          margin-top: 40px;
        }

        .past-events-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

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
      `}</style>
    </>
  );
};

export default EventsPage;
