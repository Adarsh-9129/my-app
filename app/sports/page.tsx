"use client";

import Link from "next/link";
import Image from "next/image";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800">

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-blue-700">
            Maa Urmila International Public School
          </h1>

          <nav className="space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/sports" className="text-blue-600 font-semibold">
              Sports
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="pt-40 pb-28 text-center px-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <h2 className="text-5xl font-bold mb-4">
          Sports & Physical Education
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          Building strength, discipline, teamwork, and leadership through sports.
        </p>

      </section>


      {/* ABOUT SPORTS */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="image/sports.png"
            alt="Sports Ground"
            className="rounded-2xl shadow-xl w-full"
          />


        </div>

        <div>

          <h3 className="text-3xl font-bold text-blue-700 mb-4">
            Excellence in Sports
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5">
            Our school provides world-class sports facilities
            to promote physical fitness and mental wellness.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Students are trained by certified coaches and
            encouraged to participate in district, state,
            and national level tournaments.
          </p>

        </div>

      </section>


      {/* SPORTS FACILITIES */}
      <section className="bg-blue-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
            Sports Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Cricket Ground",
              "Football Field",
              "Basketball Court",
              "Badminton Court",
              "Indoor Games",
              "Yoga & Fitness Center",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              >

                <h3 className="text-lg font-semibold mb-2">
                  {item}
                </h3>

                <p className="text-gray-600 text-sm">
                  Well-maintained and safe environment for students.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
          Sports Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "District Level Champions",
            "State Level Participation",
            "Inter-School Tournaments",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >

              <h3 className="font-semibold mb-2">{item}</h3>

              <p className="text-gray-600 text-sm">
                Recognizing dedication and performance.
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* COACHES */}
      <section className="bg-gray-100 py-28 px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
          Our Coaches
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Mr. Rajesh Kumar",
            "Ms. Neha Singh",
            "Mr. Amit Verma",
          ].map((name, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >

              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4" />

              <h3 className="font-semibold text-lg">{name}</h3>

              <p className="text-gray-600 text-sm">
                Certified Sports Coach
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="py-28 text-center bg-blue-700 text-white px-6">

        <h2 className="text-4xl font-bold mb-4">
          Join Our Sports Program
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Enroll your child in our sports programs
          and help them develop lifelong fitness habits.
        </p>

        <Link
          href="/admission"
          className="bg-white text-blue-700 px-10 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">

        © {new Date().getFullYear()} Maa Urmila International Public School.
        All Rights Reserved.

      </footer>

    </main>
  );
}
