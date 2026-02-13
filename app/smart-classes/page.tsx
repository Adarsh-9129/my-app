"use client";

import Image from "next/image";
import Link from "next/link";

export default function SmartClassesPage() {
  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage students with live polls, quizzes, and real-time feedback to make learning more interactive.",
      icon: "/image/interactive.png",
    },
    {
      title: "Digital Whiteboards",
      description:
        "Teachers can illustrate concepts dynamically using digital whiteboards for a better visual understanding.",
      icon: "/image/digital.png",
    },
    {
      title: "Video Lectures",
      description:
        "Access pre-recorded high-quality lectures anytime to reinforce learning outside the classroom.",
      icon: "/image/video.png",
    },
    {
      title: "Smart Attendance",
      description:
        "Track student attendance automatically with smart devices and reduce manual effort.",
      icon: "/image/smart.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Classes at Our School
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transforming education with technology-driven classrooms that make learning
          engaging, interactive, and fun.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Learn More
          </button>
        </div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Smart Class Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ILLUSTRATION SECTION */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-50 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">A Modern Classroom Experience</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          Our smart classrooms integrate technology seamlessly to support teachers and
          empower students. From interactive lessons to digital collaboration, learning
          has never been so exciting.
        </p>
        <div className="max-w-4xl mx-auto relative">
          <Image
            src="/image/smartclass.jpg"
            alt="Smart Classroom"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Smart Classes?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Better Understanding</h3>
            <p className="text-gray-600 leading-relaxed">
              Visual learning tools and digital content help students understand
              concepts faster and more clearly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Higher Engagement</h3>
            <p className="text-gray-600 leading-relaxed">
              Interactive lessons motivate students to participate actively in
              classroom activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Future Ready Skills</h3>
            <p className="text-gray-600 leading-relaxed">
              Students develop digital skills that prepare them for higher studies
              and future careers.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Smart Learning?
        </h2>
        <p className="max-w-2xl mx-auto text-indigo-100 mb-8">
          Join our school and give your child the advantage of modern,
          technology-enabled education.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/admissions"
            className="bg-white text-indigo-700 px-7 py-3 rounded-xl font-semibold shadow hover:bg-indigo-50 transition"
          >
            Apply Now
          </Link>

          <Link
            href="/contact"
            className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
