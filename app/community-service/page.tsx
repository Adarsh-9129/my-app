  'use client';
export default function CommunityService() {
  return (
    <>
      <header className="header">
        <div>Maa Urmila International Public School</div>
        <div>
          <a href="/">Home</a>
        </div>
      </header>

      <section className="section">
        <h1>Community Service</h1>

        <p>
          At Maa Urmila International Public School, we strongly believe that
          education is not only about academic excellence but also about building
          responsible, caring, and socially aware citizens.
        </p>

        <p>
          Our Community Service programs encourage students to understand social
          responsibilities and actively contribute to the welfare of society.
        </p>

        <div className="highlight">
          <p>
            Through community service, students develop empathy, leadership,
            teamwork, and a sense of responsibility towards the nation and
            humanity.
          </p>
        </div>

        <h2 className="subHeading">Our Community Activities</h2>

        <ul>
          <li>🌱 Cleanliness and plantation drives</li>
          <li>🤝 Helping underprivileged children</li>
          <li>🩸 Blood donation awareness programs</li>
          <li>🏥 Visits to old age homes and hospitals</li>
          <li>📚 Free education and book donation campaigns</li>
        </ul>

        <p className="bottomText">
          These initiatives help our students grow into compassionate individuals
          who are ready to serve society and make a positive difference in the
          world.
        </p>
      </section>

      <footer className="footer">
        © 2026 Maa Urmila International Public School | All Rights Reserved
      </footer>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }

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

        .section {
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        h1 {
          color: #007bff;
          font-size: 2.3em;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.05em;
          line-height: 1.8;
          margin-bottom: 15px;
          color: #444;
        }

        .highlight {
          background: #f0f8ff;
          border-left: 6px solid #28a745;
          padding: 20px;
          border-radius: 10px;
          margin: 25px 0;
        }

        .subHeading {
          color: #28a745;
          margin-top: 25px;
        }

        ul {
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }

        .bottomText {
          margin-top: 25px;
        }

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
}
