"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-24 px-6 text-gray-800">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 tracking-tight">
          Careers at Maa Urmila International Public School
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Join our community of passionate educators and professionals,
          where learning, values, and innovation come together to
          shape future leaders.
        </p>
      </section>


      {/* Why Join Us */}
      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-3xl font-bold text-indigo-800 mb-14 text-center">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Supportive Culture",
              desc: "A respectful and encouraging environment that promotes teamwork and professional growth.",
              icon: "🤝",
            },
            {
              title: "Professional Development",
              desc: "Regular workshops, leadership training, and skill enhancement programs for career success.",
              icon: "📚",
            },
            {
              title: "Modern Infrastructure",
              desc: "Digitally equipped classrooms, smart boards, and advanced teaching resources.",
              icon: "🏫",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="relative group bg-white rounded-3xl p-8 shadow-lg border border-indigo-100 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-10 transition"></div>

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full 
                           bg-gradient-to-r from-indigo-600 to-blue-600 text-white 
                           text-2xl shadow-md mb-6"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl mb-3 text-indigo-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Open Positions */}
      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
          Current Openings
        </h2>

        <div className="space-y-8">

          {[
            {
              role: "Primary School Teacher",
              info: "D.El.Ed / B.Ed | Minimum 1 Year Experience",
              desc: "Create engaging classroom experiences and nurture foundational learning.",
            },
            {
              role: "Subject Teacher (Maths / Science / English)",
              info: "B.Ed / M.Ed | Minimum 2 Years Experience",
              desc: "Deliver high-quality subject instruction and mentor students.",
            },
            {
              role: "Administrative Staff",
              info: "Graduate | Office Management Experience Preferred",
              desc: "Support daily operations and ensure smooth school administration.",
            },
          ].map((job, i) => (

            <div
              key={i}
              className="bg-white border-l-4 border-indigo-600 rounded-2xl p-7 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.role}
              </h3>

              <p className="text-sm text-indigo-600 mt-1 font-medium">
                {job.info}
              </p>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {job.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Apply Section */}
      <section className="mt-24 bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20 rounded-3xl max-w-6xl mx-auto text-center shadow-xl">

        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Teaching Journey With Us
        </h2>

        <p className="mt-5 text-indigo-100 max-w-xl mx-auto text-lg">
          Become a part of our mission to provide quality education,
          strong values, and lifelong learning.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 hover:scale-105 transition"
        >
          Apply Now
        </Link>

      </section>

    </main>
  );
}
