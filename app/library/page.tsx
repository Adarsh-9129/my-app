"use client";

import Image from "next/image";

export default function LibraryPage() {

  const facilities = [
    "Wide Collection of Books",
    "Digital Library Access",
    "Peaceful Reading Environment",
    "Reference & Competitive Books",
    "Daily Newspapers & Magazines",
    "E-Learning Resources",
    "Experienced Librarian Support",
    "Student Reading Programs",
  ];

  const categories = [
    {
      name: "Academic Books",
      count: "5,000+",
    },
    {
      name: "Story & Fiction",
      count: "2,000+",
    },
    {
      name: "Reference Books",
      count: "1,500+",
    },
    {
      name: "Magazines & Journals",
      count: "50+",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Library
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          A gateway to knowledge, imagination, and lifelong learning.
        </p>

        <button className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
          Explore Library
        </button>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            A World of Knowledge
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our school library is a rich learning resource center that supports
            academic excellence and encourages reading habits among students.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With a peaceful environment and well-organized collections,
            students can explore books and digital materials comfortably.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/image/library.png"
            alt="School Library"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* ================= FACILITIES ================= */}
      <section className="bg-yellow-50 py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Library Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg text-amber-700 mb-2">
                ✓ {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Book Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {cat.name}
              </h3>

              <p className="text-3xl font-bold text-amber-600">
                {cat.count}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= RULES ================= */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 py-20 px-6 text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Library Rules
        </h2>

        <div className="max-w-4xl mx-auto space-y-3 text-lg">

          <p>📚 Maintain silence inside the library.</p>
          <p>📖 Return books on time.</p>
          <p>🪑 Handle books with care.</p>
          <p>⏰ Follow library timings strictly.</p>
          <p>🚫 No food or drinks allowed.</p>

        </div>

      </section>

    </main>
  );
}
