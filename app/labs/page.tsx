"use client";

import Image from "next/image";

export default function ScienceLabPage() {

  const labs = [
    {
      name: "Physics Laboratory",
      desc: "Equipped with modern instruments for practical experiments.",
      icon: "⚡",
    },
    {
      name: "Chemistry Laboratory",
      desc: "Well-ventilated lab with advanced safety equipment.",
      icon: "🧪",
    },
    {
      name: "Biology Laboratory",
      desc: "Specimen models and microscopes for detailed study.",
      icon: "🔬",
    },
  ];

  const facilities = [
    "Modern Scientific Instruments",
    "Safety Equipment & First Aid",
    "Qualified Lab Assistants",
    "Well-Ventilated Rooms",
    "Digital Demonstration Tools",
    "Clean & Hygienic Environment",
    "Regular Equipment Maintenance",
    "Separate Labs for Each Subject",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Science Laboratories
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          Learning science through practical experiments and real-world observations.
        </p>

        <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          Explore Labs
        </button>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Practical Learning Environment
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our science laboratories provide hands-on experience that helps
            students understand scientific concepts effectively.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Each lab is designed with safety, accuracy, and innovation in mind,
            ensuring a rich learning atmosphere.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/science-lab.jpg"
            alt="School Science Laboratory"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* ================= LAB TYPES ================= */}
      <section className="bg-cyan-50 py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Laboratories
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {labs.map((lab, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:scale-105 transition"
            >

              <div className="text-5xl mb-4">{lab.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {lab.name}
              </h3>

              <p className="text-gray-600">
                {lab.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= FACILITIES ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Laboratory Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
            >
              <h3 className="font-semibold text-emerald-700 mb-2">
                ✓ {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* ================= SAFETY ================= */}
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-20 px-6 text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Safety Guidelines
        </h2>

        <div className="max-w-4xl mx-auto space-y-3 text-lg">

          <p>🧤 Wear safety gloves and lab coats.</p>
          <p>🔥 Handle chemicals and equipment carefully.</p>
          <p>🚿 Know the location of safety showers and exits.</p>
          <p>📋 Follow teacher instructions strictly.</p>
          <p>🚫 No food or drinks inside the lab.</p>

        </div>

      </section>

    </main>
  );
}
