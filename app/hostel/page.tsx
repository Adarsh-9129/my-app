"use client";

import Image from "next/image";

export default function HostelPage() {

  const facilities = [
    "Separate Boys & Girls Hostel",
    "24×7 Security & CCTV Surveillance",
    "Clean & Spacious Rooms",
    "Nutritious & Hygienic Mess Facility",
    "RO Drinking Water",
    "Medical Assistance & First Aid",
    "High-Speed Wi-Fi Access",
    "Study Room & Reading Hall",
    "Recreation & Indoor Games",
    "Regular Housekeeping Service",
  ];

  const wardens = [
    {
      name: "Mr. Rajesh Kumar",
      role: "Chief Warden",
    },
    {
      name: "Mrs. Sunita Sharma",
      role: "Girls Hostel Warden",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-slate-700 to-blue-700 text-white">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Hostel Facility
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          A safe, comfortable, and disciplined residential environment for students.
        </p>

        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          Know More
        </button>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            A Home Away From Home
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our school hostel provides a nurturing environment where students
            live, learn, and grow with discipline and responsibility.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With experienced wardens and modern facilities, we ensure students
            feel safe, comfortable, and focused on academics.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/hostel.jpg"
            alt="School Hostel"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* ================= FACILITIES ================= */}
      <section className="bg-blue-50 py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Hostel Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition text-center"
            >
              <h3 className="font-semibold text-blue-700">
                ✓ {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* ================= WARDENS ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Hostel Administration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {wardens.map((warden, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition"
            >

              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-700">
                {warden.name.charAt(0)}
              </div>

              <h3 className="text-xl font-semibold">
                {warden.name}
              </h3>

              <p className="text-gray-600">
                {warden.role}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= RULES ================= */}
      <section className="bg-gradient-to-r from-slate-700 to-blue-700 py-20 px-6 text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Hostel Rules & Discipline
        </h2>

        <div className="max-w-4xl mx-auto space-y-3 text-lg">

          <p>⏰ Follow daily schedule strictly.</p>
          <p>📱 Limited use of mobile phones.</p>
          <p>🧹 Maintain cleanliness in rooms.</p>
          <p>🚫 No outsiders without permission.</p>
          <p>📋 Obey hostel authorities.</p>

        </div>

      </section>

    </main>
  );
}
