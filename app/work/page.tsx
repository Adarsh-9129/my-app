"use client";

import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 pt-32 pb-28 px-6 text-gray-800">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-28">

        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          Our Journey
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 tracking-tight leading-tight">
          Our Work & Achievements
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Empowering young minds through excellence, discipline,
          innovation, and holistic education.
        </p>

      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-28">

        {[
          {
            icon: "🏆",
            title: "Academic Excellence",
            desc: "Consistent top board results and competitive exam success.",
          },
          {
            icon: "🎯",
            title: "Skill Development",
            desc: "Leadership, creativity, and confidence building programs.",
          },
          {
            icon: "🌱",
            title: "Value Education",
            desc: "Strong moral values, discipline, and social responsibility.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-3xl shadow-lg group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-indigo-800">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </section>

      {/* INITIATIVES */}
      <section className="max-w-6xl mx-auto mb-28">

        <h2 className="text-3xl font-bold text-indigo-900 mb-14 text-center">
          Key Initiatives
        </h2>

        <div className="space-y-12">

          {[
            {
              title: "Digital Learning Program",
              desc: "Smart classrooms and e-learning platforms for better engagement.",
            },
            {
              title: "Sports Excellence Mission",
              desc: "Professional training, tournaments, and physical fitness.",
            },
            {
              title: "Teacher Development Program",
              desc: "Advanced training for high-quality teaching.",
            },
            {
              title: "Community Outreach",
              desc: "Social programs and environmental initiatives.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-9 border-l-8 border-indigo-600 shadow-sm hover:shadow-xl transition"
            >

              <h3 className="text-xl font-semibold text-indigo-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto mb-28">

        <div className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-center text-white">

          {[
            ["15+", "Years of Excellence"],
            ["1200+", "Students"],
            ["80+", "Faculty"],
            ["100%", "Results"],
          ].map(([num, text], i) => (
            <div key={i} className="hover:scale-105 transition">

              <h3 className="text-4xl font-extrabold">
                {num}
              </h3>

              <p className="mt-2 text-sm text-indigo-100">
                {text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-24 rounded-3xl max-w-6xl mx-auto text-center shadow-2xl">

        <h2 className="text-3xl md:text-4xl font-bold">
          Building Future Leaders Every Day
        </h2>

        <p className="mt-5 text-indigo-100 max-w-xl mx-auto text-lg">
          Join us in shaping tomorrow through quality education,
          innovation, and strong values.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-12 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 hover:scale-110 transition"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}
