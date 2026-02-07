"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6 text-gray-800">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
          Our Educational Services
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
          Maa Urmila International Public School is dedicated to nurturing young
          minds through quality education, discipline, and holistic development.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto space-y-16">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Academic Excellence
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We follow the CBSE curriculum with strong emphasis on conceptual
              learning, critical thinking, and practical understanding.
              Our academic framework prepares students for competitive exams
              and future challenges.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Academics"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="Teachers"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Experienced Faculty
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our teachers are well-qualified, passionate, and committed to
              guiding students with individual attention, mentoring, and care.
            </p>
          </div>

        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Smart Classrooms
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Digitally equipped classrooms enable interactive lessons,
              visual learning, and better student engagement.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="Classroom"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">

          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            alt="Sports"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Sports & Physical Development
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We encourage students to participate in sports activities
              that build strength, teamwork, discipline, and confidence.
            </p>
          </div>

        </div>

        {/* Section 5 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Safe & Supportive Environment
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our campus ensures complete safety with CCTV surveillance,
              trained staff, and a positive learning atmosphere.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed"
            alt="Safety"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </section>

      {/* Call To Action */}
      <section className="mt-24 bg-indigo-700 text-white py-16 rounded-3xl max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Shape Your Child’s Future With Us
        </h2>

        <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
          Join Maa Urmila International Public School and experience
          excellence in education and values.
        </p>

        <Link
          href="/admissions"
          className="inline-block mt-6 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
        >
          Apply Now
        </Link>

      </section>

    </main>
  );
}
