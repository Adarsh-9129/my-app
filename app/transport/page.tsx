"use client";

import Image from "next/image";

export default function TransportPage() {
  const routes = [
    {
      area: "City Center",
      timing: "6:45 AM - 2:30 PM",
      busNo: "Bus No. 1",
    },
    {
      area: "Station Road",
      timing: "7:00 AM - 2:45 PM",
      busNo: "Bus No. 2",
    },
    {
      area: "Main Market",
      timing: "7:15 AM - 3:00 PM",
      busNo: "Bus No. 3",
    },
    {
      area: "Green Park",
      timing: "6:50 AM - 2:40 PM",
      busNo: "Bus No. 4",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Transport Facility
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          Safe, reliable, and comfortable transport service for our students.
        </p>

        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          View Routes
        </button>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Safe & Secure Transportation
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our school provides well-maintained buses equipped with GPS tracking,
            trained drivers, and female attendants to ensure the safety of students.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Each vehicle is regularly inspected and follows strict safety
            guidelines for smooth daily travel.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/image/schoolbus.png"
            alt="School Bus"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-indigo-50 py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Transport Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "GPS Tracking System",
            "Experienced Drivers",
            "Female Attendant",
            "Emergency Support",
            "First Aid Facility",
            "CCTV Cameras",
            "Clean & Hygienic Buses",
            "Regular Maintenance",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">
                ✓ {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* ================= ROUTES ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Bus Routes & Timings
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">

          <table className="w-full text-left border-collapse">

            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4">Bus No.</th>
                <th className="p-4">Area</th>
                <th className="p-4">Timing</th>
              </tr>
            </thead>

            <tbody>
              {routes.map((route, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="p-4 font-medium">{route.busNo}</td>
                  <td className="p-4">{route.area}</td>
                  <td className="p-4">{route.timing}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-20 px-6 text-center text-white">

        <h2 className="text-3xl font-bold mb-4">
          Transport Enquiry
        </h2>

        <p className="mb-6 max-w-xl mx-auto">
          For route details, fees, and registration, please contact our
          transport department.
        </p>

        <p className="text-lg font-semibold">
          📞 Phone: +91 9XXXXXXXXX
        </p>

        <p className="text-lg font-semibold mt-2">
          ✉️ Email: transport@yourschool.com
        </p>

      </section>

    </main>
  );
}
