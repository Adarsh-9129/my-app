"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "https://educationsnapshots.com/wp-content/uploads/sites/4/2018/11/campus-international-school-cleveland-5.jpg",
  "https://spaces4learning.com/-/media/EDU/SPM/Images/2019/10/SportsFacilities01x640.jpg",
  "https://www.ipsbhopal.com/Campus/images/IPS-academics1f.jpg",
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    fetch("/api/review")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviewCount(data.data.length);
        }
      })
      .catch((err) => console.error("Failed to fetch reviews count", err));
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4500);

    return () => clearInterval(i);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <main className="bg-[#f8fafc] text-slate-800 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <h1 className="font-extrabold tracking-wide text-xl text-indigo-700">
            MAA URMILA IPS
          </h1>

          <nav className="hidden md:flex items-center gap-8 font-medium">

            {/* Home */}
            <Link href="/" className="hover:text-indigo-600 transition">
              Home
            </Link>

            {/* MODULES DROPDOWN */}
            <div className="relative">

              <button onClick={() => toggleDropdown("modules")} className="hover:text-indigo-600 transition flex items-center gap-1">
                Modules ▾
              </button>

              <div
                className={`absolute left-[-150px] top-10 bg-white shadow-xl rounded-xl p-6 w-[400px] gap-10 border ${openDropdown === "modules" ? "flex" : "hidden"
                  }`}
              >

                {/* Column 1 */}
                <div className="space-y-3 text-sm">

                  <a href="/academics" className="block hover:text-indigo-600">
                    Academics
                  </a>

                  <a href="/sports" className="block hover:text-indigo-600">
                    Sports
                  </a>

                  <a href="/library" className="block hover:text-indigo-600">
                    Library
                  </a>

                  <a href="/labs" className="block hover:text-indigo-600">
                    Science Labs
                  </a>

                </div>

                {/* Column 2 */}
                <div className="space-y-3 text-sm">

                  <a href="/transport" className="block hover:text-indigo-600">
                    Transport
                  </a>

                  <a href="/smart-classes" className="block hover:text-indigo-600">
                    Smart Classes
                  </a>

                  <a href="/activities" className="block hover:text-indigo-600">
                    Activities
                  </a>

                  <a href="/hostel" className="block hover:text-indigo-600">
                    Hostel
                  </a>

                </div>

              </div>
            </div>


            {/* About Dropdown */}
            <div className="relative">

              <button onClick={() => toggleDropdown("about")} className="hover:text-indigo-600 transition flex items-center gap-1">
                About ▾
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-[-200px] top-10 bg-white shadow-xl rounded-xl p-6 w-[500px] gap-12 border ${openDropdown === "about" ? "flex" : "hidden"
                  }`}
              >

                {/* Column 1 */}
                <div className="space-y-3 text-sm">
                  <Link href="/services" className="block hover:text-indigo-600">
                    Services
                  </Link>

                  <Link href="/careers" className="block hover:text-indigo-600">
                    Careers
                  </Link>

                  <Link href="/support" className="block hover:text-indigo-600">
                    Support
                  </Link>

                  <Link href="/contact" className="block hover:text-indigo-600">
                    Contact Us
                  </Link>
                </div>

                {/* Column 2 */}
                <div className="space-y-3 text-sm">
                  <Link href="/work" className="block hover:text-indigo-600">
                    See Our Work
                  </Link>

                  <Link href="/testimonials" className="block hover:text-indigo-600">
                    Testimonials
                  </Link>

                  <Link href="/blog" className="block hover:text-indigo-600">
                    Blog
                  </Link>

                  <Link href="/resources" className="block hover:text-indigo-600">
                    Top Resources ▶
                  </Link>
                </div>

              </div>
            </div>

            {/* Contact */}
            <Link href="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>

            {/* Request a Demo */}
            <Link href="/demo" className="hover:text-indigo-600 transition">
              Request a Demo
            </Link>

            {/* Apply */}
            <Link
              href="/admissions"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:scale-105 transition"
            >
              Apply Now
            </Link>

          </nav>
        </div>
      </header>

      {/* SCHOOL INFO BANNER */}
      <section className="relative mt-28 z-30 px-4">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-50 via-sky-50 to-purple-50 
                  rounded-3xl shadow-2xl flex flex-col md:flex-row 
                  items-center gap-8 p-8 border border-indigo-100">

          {/* Logo */}
          <div className="relative">

            <div className="p-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 rounded-full">

              <img
                src="/image/logoschool.jpeg"
                alt="School Logo"
                className="w-28 h-28 rounded-full bg-white p-1"
              />

            </div>

            <span className="absolute -bottom-2 right-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              ✔ Verified
            </span>

          </div>


          {/* Info */}
          <div className="flex-1 text-center md:text-left">

            <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-800 leading-tight">

              Maa Urmila International Public School

            </h2>

            <p className="mt-2 text-gray-600 text-sm flex items-center gap-2 justify-center md:justify-start">

              📍 Lahrpur Road, Vill Patwara, Sitapur, Uttar Pradesh

            </p>

            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">

              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                CBSE Pattern
              </span>

              <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">
                Smart Classes
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                Safe Campus
              </span>

            </div>

          </div>


          {/* Review Box */}
          <Link href="/review">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 
                      text-white px-7 py-5 rounded-2xl 
                      text-center shadow-xl min-w-[120px] cursor-pointer hover:scale-110 transition-transform">

              <div className="text-4xl font-extrabold">
                {reviewCount}
              </div>

              <p className="text-sm opacity-90 mt-1">
                Reviews
              </p>

            </div>
          </Link>

        </div>

      </section>


      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">

        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/70" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">



          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Shaping <span className="text-sky-400">Future Leaders</span>
          </h1>

          <p className="mt-6 text-lg text-slate-200">
            A world-class CBSE institution nurturing excellence, discipline & values
          </p>

        </div>
      </section>



      {/* STATS */}
      <section className="relative -mt-24 z-20 max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-3xl shadow-xl p-10 text-center">

          {[
            ["15+", "Years of Excellence"],
            ["1200+", "Students"],
            ["80+", "Faculty"],
            ["100%", "Results"],
          ].map(([num, txt], i) => (

            <div key={i} className="hover:scale-105 transition">

              <h3 className="text-4xl font-extrabold text-indigo-600">
                {num}
              </h3>

              <p className="mt-2 text-slate-600">
                {txt}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* INTRO */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">

            <img
              src="https://educationsnapshots.com/wp-content/uploads/sites/4/2018/11/campus-international-school-cleveland-5.jpg"
              className="w-full h-full object-cover"
              alt="Campus"
            />

          </div>

          <div>

            <h2 className="text-4xl font-extrabold leading-tight">
              Welcome To{" "}
              <span className="text-sky-300">
                Maa Urmila International Public School
              </span>
            </h2>

            <h3 className="mt-4 text-xl font-semibold text-slate-200">
              Redefining Education for the 21st Century
            </h3>

            <p className="mt-6 text-slate-200 leading-relaxed">
              We deliver quality CBSE education with discipline, values,
              and modern learning practices.
            </p>

            <Link
              href="/about"
              className="inline-block mt-8 px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg"
            >
              Read More
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {[
          ["🎓", "Academics", "CBSE-based quality education", "/academics"],
          ["👨‍🏫", "Faculty Info", "Meet our expert teachers", "/faculty-info"],
          ["⚽", "Sports", "Encouraging physical activity", "/sports"],
          ["🤝", "Community", "Building strong relationship between students, parents and teachers", "/community"],
        ].map(([icon, title, desc, link], i) => (

          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 text-center
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{icon}</div>

            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {desc}
            </p>

            <a
              href={link}
              className="text-indigo-600 font-medium hover:underline"
            >
              Learn More →
            </a>

          </div>
        ))}

      </section>


      {/* TESTIMONIAL */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-24 text-white text-center">

        <h2 className="text-3xl font-bold">
          What Parents Say
        </h2>

        <p className="mt-8 italic max-w-xl mx-auto">
          “A safe, disciplined and inspiring environment for our child.”
        </p>

      </section>


      {/* FOOTER */}
      <footer className="pt-20 bg-white border-t">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-black">

          <div>
            <h3 className="text-xl font-bold">Maa Urmila IPS</h3>

            <p className="mt-4 text-sm">
              Lahrpur Road, Vill Patwara, Sitapur, UP
            </p>

            <p className="mt-4 text-sm">📞 +916307779480</p>

            <p className="text-sm">✉️ info@maa-urmilaips.com</p>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">
              Important Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link href="/music">Music</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/achievements">Achievements</Link></li>
              <li><Link href="/activities">Activities</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link href="/cbsc-information">CBSE Information</Link></li>
              <li><Link href="/apply-now">Apply Now</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/child-development">Child Development</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">
              Newsletter
            </h4>

            <div className="flex">

              <input
                placeholder="Type Email"
                className="px-4 py-2 rounded-l-full border w-full"
              />

              <button className="bg-yellow-400 px-6 rounded-r-full font-semibold">
                Subscribe
              </button>

            </div>
          </div>

        </div>


        <div className="mt-16 border-t py-6 text-center text-sm">
          © 2026 Maa Urmila International Public School | All Rights Reserved
        </div>

      </footer>

    </main>
  );
}
