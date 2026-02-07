"use client";

import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mr. Rakesh Mishra",
      role: "Parent (Class VIII Student)",
      msg: "The school provides excellent academic guidance and a disciplined environment. My child has grown confident and responsible.",
    },
    {
      name: "Ananya Singh",
      role: "Student (Class X)",
      msg: "Teachers are very supportive and always motivate us to do our best. The learning environment is inspiring.",
    },
    {
      name: "Mrs. Sunita Verma",
      role: "Parent (Class V Student)",
      msg: "I am very satisfied with the school’s teaching quality and safety measures. It truly cares for students.",
    },
    {
      name: "Rahul Kumar",
      role: "Student (Class XII)",
      msg: "The school helped me prepare well for board exams. Regular tests and guidance made learning easier.",
    },
    {
      name: "Mr. Pankaj Sharma",
      role: "Parent (Class IX Student)",
      msg: "Communication with teachers is very good. We always receive proper updates about our child’s progress.",
    },
    {
      name: "Priya Gupta",
      role: "Student (Class VII)",
      msg: "I love participating in activities and sports. The school gives equal importance to studies and talent.",
    },
  ];

  const stats = [
    ["15+", "Years of Excellence"],
            ["1200+", "Students"],
            ["80+", "Faculty"],
            ["100%", "Results"],
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-28 px-6 text-gray-800">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <span className="inline-block mb-4 px-5 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          Voices of Trust
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 tracking-tight">
          What Parents & Students Say
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our success is measured by the happiness, confidence, and achievements of our students and parents. Here’s what they share about their journey with us.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-28">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl text-indigo-600 mb-4 font-serif">“</div>

            <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
              {item.msg}
            </p>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-indigo-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-xl p-10 text-center gap-6">
          {stats.map(([num, text], i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold text-indigo-600">{num}</h3>
              <p className="mt-2 text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-800 text-white py-24 rounded-2xl max-w-6xl mx-auto text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold">Become a Part of Our Success Story</h2>
        <p className="mt-5 text-indigo-100 max-w-xl mx-auto text-lg">
          Join Maa Urmila International Public School and experience quality education with strong values.
        </p>

        <Link
          href="/admissions"
          className="inline-block mt-10 px-12 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 hover:scale-105 transition"
        >
          Apply for Admission
        </Link>
      </section>
    </main>
  );
}
