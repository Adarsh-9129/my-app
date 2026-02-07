"use client";

import Link from "next/link";

export default function ModulesPage() {
  const modules = [
    {
      title: "Events Module",
      desc: "School events & programs",
      icon: "📅",
      link: "/events",
    },
    {
      title: "Admission Module",
      desc: "Online admission form",
      icon: "📝",
      link: "/apply",
    },
    {
      title: "Blog / News",
      desc: "Latest school updates",
      icon: "📰",
      link: "/blog",
    },
    {
      title: "Gallery Module",
      desc: "Photos & videos",
      icon: "🖼️",
      link: "/gallery",
    },
    {
      title: "Faculty Directory",
      desc: "Teachers information",
      icon: "👨‍🏫",
      link: "/faculty",
    },
    {
      title: "Resources Module",
      desc: "PDFs, syllabus, notices",
      icon: "📂",
      link: "/resources",
    },
    {
      title: "Contact / Forms",
      desc: "Enquiry & feedback forms",
      icon: "📋",
      link: "/contact",
    },
    {
      title: "Map / Location",
      desc: "School location",
      icon: "📍",
      link: "/location",
    },
    {
      title: "Video Module",
      desc: "Online classes & videos",
      icon: "🎥",
      link: "/videos",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Our School Modules
        </h1>
        <p className="mt-4 text-gray-600">
          Explore all digital facilities of our school
        </p>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">

        {modules.map((item, i) => (
          <Link key={i} href={item.link}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">

              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>

              <button className="mt-5 text-indigo-600 font-semibold text-sm">
                View More →
              </button>

            </div>
          </Link>
        ))}

      </div>
    </main>
  );
}
