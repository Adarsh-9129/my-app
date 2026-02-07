"use client";

import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "Innovative Teaching Methods at Our School",
      content: "Discover how our teachers use modern and interactive teaching methods to make learning engaging and effective for every student. At Maa Urmila International Public School, we combine traditional methods with digital learning tools to foster curiosity and critical thinking. Personalized guidance ensures every student excels academically and creatively.",
      author: "Admin",
      date: "Feb 5, 2026"
    },
    {
      title: "Celebrating Annual Sports Day",
      content: "Our Annual Sports Day is a celebration of talent, teamwork, and spirit. Students participate in various events and showcase their skills, from athletics to group activities. This day instills discipline, encourages collaboration, and motivates students to embrace a healthy and active lifestyle.",
      author: "Admin",
      date: "Jan 28, 2026"
    },
    {
      title: "Top Tips for Exam Preparation",
      content: "Effective study techniques, time management strategies, and self-care tips help students excel in their exams and build confidence. Our educators provide personalized guidance, practice tests, and motivational support to ensure students feel prepared and empowered to achieve their best.",
      author: "Admin",
      date: "Jan 15, 2026"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-28 px-6 text-gray-800">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">
          Our Blog
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay updated with the latest news, events, and educational insights from Maa Urmila International Public School. Each article shares valuable stories and tips for students, parents, and educators.
        </p>
      </section>

      {/* BLOG CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-24">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">{blog.title}</h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {blog.content}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500 border-t pt-4">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-800 text-white py-20 rounded-2xl max-w-4xl mx-auto text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold">Stay Connected & Informed</h2>
        <p className="mt-5 text-indigo-100 max-w-lg mx-auto text-lg">
          Follow our blog to get the latest insights, updates, and educational tips. Be part of our community committed to excellence in learning.
        </p>

        <Link
          href="/admissions"
          className="inline-block mt-10 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 hover:scale-105 transition"
        >
          Apply Now
        </Link>
      </section>

    </main>
  );
}
