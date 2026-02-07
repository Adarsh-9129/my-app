'use client';

export default function SportsPage() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div>Maa Urmila International Public School</div>
        <a href="/" className="homeLink">Home</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Sports & Physical Education</h1>
        <p>Play • Power • Performance</p>
      </section>

      {/* CONTENT */}
      <section className="section">
        <h2 className="title">Our Sports Activities</h2>

        <div className="sportsGrid">
          <div className="sportBox">
            <img src="/images/cricket.png" alt="Cricket" />
            <h3>Cricket</h3>
            <p>Bat, Ball & Fielding</p>
          </div>

          <div className="sportBox">
            <img src="/images/football.png" alt="Football" />
            <h3>Football</h3>
            <p>Goal, Passing & Stamina</p>
          </div>

          <div className="sportBox">
            <img src="/images/basketball.png" alt="Basketball" />
            <h3>Basketball</h3>
            <p>Hoop & Dribbling</p>
          </div>

          <div className="sportBox">
            <img src="/images/batmintan.png" alt="Badminton" />
            <h3>Badminton</h3>
            <p>Racket & Shuttle Control</p>
          </div>

          <div className="sportBox">
            <img
              src="https://png.pngtree.com/png-vector/20250731/ourmid/pngtree-blue-yellow-and-white-volleyball-ball-png-image_16798436.webp"
              alt="Volleyball"
            />
            <h3>Volleyball</h3>
            <p>Net Play & Teamwork</p>
          </div>

          <div className="sportBox">
            <img src="/images/Athletics.jpg" alt="Athletics" />
            <h3>Athletics</h3>
            <p>Running & Fitness</p>
          </div>

          <div className="sportBox">
            <img src="/images/yoga.png" alt="Yoga" />
            <h3>Yoga</h3>
            <p>Balance & Mindfulness</p>
          </div>

          <div className="sportBox">
            <img src="/images/indoor.png" alt="Indoor Games" />
            <h3>Indoor Games</h3>
            <p>Chess, Carrom & TT</p>
          </div>
        </div>
      </section>

     

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Maa Urmila International Public School
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          background: #f0f8ff;
          color: #333;
        }

        .header {
          background: #007bff;
          color: #fff;
          padding: 15px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .homeLink {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        .hero {
          background: #0d6efd;
          color: #fff;
          text-align: center;
          padding: 70px 20px;
        }

        .hero h1 {
          font-size: 2.6em;
        }

        .hero p {
          font-size: 1.2em;
        }

        .section {
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
        }

        .title {
          color: #007bff;
          margin-bottom: 25px;
          text-align: center;
        }

        .sportsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .sportBox {
          background: #fff;
          padding: 25px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
          transition: 0.3s;
        }

        .sportBox:hover {
          transform: translateY(-8px);
        }

        .sportBox img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 15px;
        }

        .sportBox h3 {
          color: #007bff;
          margin-bottom: 8px;
        }

        .achievementsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .achievementBox {
          background: #3aa0c8;
          color: #fff;
          padding: 40px 20px;
          border-radius: 20px;
          text-align: center;
          font-size: 1.1em;
          font-weight: bold;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
          transition: 0.3s;
        }

        .achievementBox:hover {
          transform: translateY(-8px);
        }

        .footer {
          background: #222;
          color: #aaa;
          text-align: center;
          padding: 15px;
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
