"use client";

import Link from "next/link";
import { BookOpen, Video, FileText, Download, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Digital Library",
      description: "Access e-books, reference materials, and study guides anytime.",
      icon: BookOpen,
      link: "/library",
      tag: "E-Books",
    },
    {
      title: "Video Lectures",
      description: "Recorded classes and concept-based video lessons.",
      icon: Video,
      link: "/videos",
      tag: "Recorded",
    },
    {
      title: "Study Notes",
      description: "Download notes, worksheets, and practice papers.",
      icon: FileText,
      link: "/notes",
      tag: "PDF",
    },
    {
      title: "Downloads",
      description: "Syllabus, timetable, forms, and important documents.",
      icon: Download,
      link: "/downloads",
      tag: "Files",
    },
    {
      title: "Online Resources",
      description: "Useful learning websites and educational portals.",
      icon: Globe,
      link: "/online-resources",
      tag: "Web",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100 pt-28 pb-24 px-6">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
        >
          Academic Support Center
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
        >
          Learning Resources
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          A carefully curated collection of digital materials, lectures, and
          documents to help students achieve academic excellence.
        </motion.p>
      </section>

      {/* RESOURCES GRID */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.link}
                className="group relative block h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-7 overflow-hidden"
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-sky-100/40 opacity-0 group-hover:opacity-100 transition" />

                {/* Tag */}
                <span className="relative z-10 inline-block mb-4 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wide">
                  {item.tag}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 mb-5 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-indigo-600" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="relative z-10 text-gray-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <span className="relative z-10 inline-flex items-center gap-1 text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Explore
                  <span>→</span>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </section>

      {/* INFO / SUPPORT */}
      <section className="max-w-5xl mx-auto mt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-14 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Assistance?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            If you are unable to find the required study material, feel free to
            contact our academic support team for guidance and assistance.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition"
          >
            Contact Support
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
