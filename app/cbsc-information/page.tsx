"use client";

import Link from "next/link";

export default function CBSEInfoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 text-white py-24 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            CBSE Information
          </h1>
          <p className="text-lg md:text-xl text-indigo-100">
            Central Board of Secondary Education – Affiliation & Academic Details
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-t-4 border-indigo-600">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            About CBSE
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            CBSE is a national level education board in India focusing on academic
            excellence, discipline, and holistic development.
          </p>
        </div>

        {/* Affiliation */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-t-4 border-blue-600">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            Affiliation
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📌 Board: CBSE, New Delhi</li>
            <li>📌 Affiliation No: 1234567</li>
            <li>📌 School Code: 89012</li>
            <li>📌 Status: Provisionally Affiliated</li>
            <li>📌 Medium: English / Hindi</li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-t-4 border-sky-600">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            Curriculum
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Our school follows CBSE syllabus from Nursery to Class XII with special
            focus on Science, Mathematics, Languages and IT.
          </p>
        </div>

        {/* Facilities */}
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-t-4 border-purple-600">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            Facilities
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✔ Smart Classrooms</li>
            <li>✔ Science & Computer Labs</li>
            <li>✔ Library</li>
            <li>✔ Sports Area</li>
            <li>✔ Trained Teachers</li>
          </ul>
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
            Mandatory Public Disclosure
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            <div className="p-4 rounded-xl bg-indigo-50">
              <p className="font-semibold text-indigo-700">School Name</p>
              <p>Maa Urmila International Public School</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              <p className="font-semibold text-indigo-700">Address</p>
              <p>Your School Address Here</p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50">
              <p className="font-semibold text-indigo-700">Principal</p>
              <p>Mr./Mrs. XYZ</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50">
              <p className="font-semibold text-indigo-700">Contact</p>
              <p>+91-XXXXXXXXXX</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50">
              <p className="font-semibold text-indigo-700">Email</p>
              <p>school@email.com</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              <p className="font-semibold text-indigo-700">Website</p>
              <p>www.yourschoolwebsite.com</p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
