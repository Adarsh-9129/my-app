"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 pt-32 pb-28 px-6 text-gray-800">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">

        <span className="inline-block mb-4 px-5 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          Always With You
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 tracking-tight">
          Student & Parent Support
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At Maa Urmila International Public School, we believe that
          strong support systems help students grow confidently.
          Our dedicated team ensures academic, emotional, and
          administrative assistance at every stage.
        </p>

      </section>

      {/* MAIN SUPPORT CONTENT */}
      <section className="max-w-6xl mx-auto mb-28">

        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border">

          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
            Our Support System
          </h2>

          <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">

            <p>
              📘 <span className="font-semibold text-indigo-700">Academic Support:</span>{" "}
              Our teachers provide individual attention, doubt-clearing
              sessions, and regular assessments to ensure students
              perform at their best.
            </p>

            <p>
              🧠 <span className="font-semibold text-indigo-700">Student Counseling:</span>{" "}
              We offer emotional and psychological guidance to help
              students handle stress, confidence issues, and academic pressure.
            </p>

            <p>
              📝 <span className="font-semibold text-indigo-700">Examination Assistance:</span>{" "}
              Proper guidance for board exams, internal assessments,
              preparation strategies, and time management.
            </p>

            <p>
              🚌 <span className="font-semibold text-indigo-700">Transport & Safety:</span>{" "}
              Safe and well-monitored transportation facilities with
              trained staff and secure routes.
            </p>

            <p>
              💻 <span className="font-semibold text-indigo-700">Digital & Technical Help:</span>{" "}
              Support for online learning platforms, smart classes,
              and digital resources.
            </p>

            <p>
              🤝 <span className="font-semibold text-indigo-700">Parent Communication:</span>{" "}
              Regular meetings, progress reports, and open communication
              channels to keep parents informed.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT BOX */}
      <section className="max-w-6xl mx-auto mb-28">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border">

            <h3 className="text-2xl font-bold text-indigo-800 mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              If you have any questions related to academics,
              admissions, transport, or student welfare,
              feel free to contact us anytime.
            </p>

            <div className="space-y-4 text-sm">

              <p>
                📞 <span className="font-semibold">Phone:</span> +91 63077 79480
              </p>

              <p>
                ✉️ <span className="font-semibold">Email:</span> info@maa-urmilaips.com
              </p>

              <p>
                🏫 <span className="font-semibold">Address:</span> Lahrpur Road, Sitapur, UP
              </p>

            </div>

          </div>

          {/* Right Info */}
          <div className="bg-gradient-to-br from-indigo-700 to-blue-700 rounded-3xl shadow-xl p-10 text-white">

            <h3 className="text-2xl font-bold mb-6">
              Support Hours
            </h3>

            <p className="text-indigo-100 text-sm leading-relaxed mb-6">
              Our support team is available during school working hours
              to help students and parents efficiently.
            </p>

            <div className="space-y-3 text-sm">

              <p>🕘 Monday – Friday: 8:00 AM – 3:00 PM</p>
              <p>🕘 Saturday: 8:00 AM – 1:00 PM</p>
              <p>❌ Sunday: Closed</p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-24 rounded-3xl max-w-6xl mx-auto text-center shadow-2xl">

        <h2 className="text-3xl md:text-4xl font-bold">
          We’re Always Ready to Help You
        </h2>

        <p className="mt-5 text-indigo-100 max-w-xl mx-auto text-lg">
          Your child’s success and well-being is our priority.
          Contact us for any guidance or assistance.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-12 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 hover:scale-110 transition"
        >
          Contact Support
        </Link>

      </section>

    </main>
  );
}
