"use client";
import React from "react";

const GalleryPage: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="/">MAA URMILA INTERNATIONAL PUBLIC SCHOOL</a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/admissions">Admissions</a>
          <a href="/contact">Contact</a>
          <a href="/admissions" className="btn primary">Apply Now</a>
        </nav>
      </header>

      <main>
        <section className="container">
          <h1>Photo Gallery</h1>
          <p>Explore moments from our school activities, events, and daily life.</p>

          <div className="gallery">
            {galleryImages.map((item, index) => (
              <div className="gallery-item" key={index}>
                <img src={item.src} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 MAA URMILA INTERNATIONAL PUBLIC SCHOOL. All rights reserved.</p>
      </footer>

      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .site-header {
          background-color: #007bff;
          color: white;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          font-weight: bold;
          color: white;
          text-decoration: none;
        }
        nav a {
          color: white;
          margin-left: 15px;
          text-decoration: none;
          font-weight: bold;
        }
        .btn.primary {
          background-color: #0069d9;
          padding: 6px 12px;
          border-radius: 4px;
        }
        .container {
          max-width: 1200px;
          margin: 30px auto;
          padding: 20px;
          text-align: center;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.05);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .caption {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgba(0,0,0,0.65);
          color: #fff;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .caption {
          opacity: 1;
        }
        .site-footer {
          text-align: center;
          padding: 12px;
          background-color: #007bff;
          color: white;
          margin-top: 30px;
        }
      `}</style>
    </>
  );
};

const galleryImages = [
  {
    src: "https://admin.ssrvm.org/uploads/Hand_on_Activities_5_266045b0fa.jpg",
    caption: "Hands-on Learning Activity",
  },
  {
    src: "https://www.indianhighschool.edu.in/images/inner-img/curricular-activity9.jpg",
    caption: "Group Discussion in Class",
  },
  {
    src: "https://lancersarmyschools.com/wp-content/uploads/2021/07/PT-Trainingnew-848x548.jpg",
    caption: "Physical Training Session",
  },
  {
    src: "https://www.povertyactionlab.org/sites/default/files/styles/full_width_medium_cropped/public/tarl-india_0.jpg",
    caption: "Interactive Teaching Session",
  },
  {
    src: "https://thumbs.dreamstime.com/b/school-student-presenting-project-to-classmates-classroom-indian-female-teacher-observing-education-presentation-students-373323234.jpg",
    caption: "Student Project Presentation",
  },
  {
    src: "https://varthana.com/school/wp-content/uploads/2023/01/B135.jpg",
    caption: "Experiential Learning",
  },
  {
    src: "https://images.seattleschild.com/wp-content/uploads/2024/06/92738redmondRED_0807_AnandaMela.jpg",
    caption: "Cultural Festival Celebration",
  },
  {
    src: "https://www.overture.org/media/5akiumtv/kirkalaanjalibanner.jpg",
    caption: "Annual School Event",
  },
];

export default GalleryPage;
