"use client";

import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-gray-800">

      {/* HEADER */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-700">
            Maa Urmila International Public School
          </h1>

          <nav className="space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/community" className="text-indigo-600 font-semibold">Community</Link>
            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="pt-40 pb-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          Our School Community
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Building strong relationships between students, parents, teachers,
          and society for a brighter future.
        </p>
      </section>


      {/* COMMUNITY FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Parent Association
          </h3>

          <p className="text-gray-600 leading-relaxed">
            We encourage active parent participation in school activities
            to support students’ academic and personal growth.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Student Clubs
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Various clubs help students explore creativity, leadership,
            sportsmanship, and teamwork.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Social Activities
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Community service programs teach responsibility,
            compassion, and social awareness.
          </p>
        </div>

      </section>


      {/* COMMUNITY VALUES */}
      <section className="bg-indigo-700 text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Community Values
          </h2>

          <p className="max-w-3xl mx-auto text-indigo-100 leading-relaxed mb-12">
            We believe in unity, respect, discipline, and lifelong learning.
            Our community works together to nurture responsible citizens.
          </p>


          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">Respect</h3>
              <p className="text-indigo-100 text-sm">
                Mutual understanding and dignity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Unity</h3>
              <p className="text-indigo-100 text-sm">
                Working together as one family.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Discipline</h3>
              <p className="text-indigo-100 text-sm">
                Strong moral and ethical values.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-indigo-100 text-sm">
                Striving for continuous improvement.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* JOIN COMMUNITY */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Join Our Growing Community
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Become a part of our vibrant learning environment
          and contribute to shaping future leaders.
        </p>

        <Link
          href="/admissions"
          className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-800 transition"
        >
          Apply Now
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">

        <p>
          © {new Date().getFullYear()} Maa Urmila International Public School.
          All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}
