"use client";

import Image from "next/image";

export default function SmartClassesPage() {
  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage students with live polls, quizzes, and real-time feedback to make learning more interactive.",
      icon: "/icons/interactive.svg",
    },
    {
      title: "Digital Whiteboards",
      description:
        "Teachers can illustrate concepts dynamically using digital whiteboards for a better visual understanding.",
      icon: "/icons/whiteboard.svg",
    },
    {
      title: "Video Lectures",
      description:
        "Access pre-recorded high-quality lectures anytime to reinforce learning outside the classroom.",
      icon: "/icons/video.svg",
    },
    {
      title: "Smart Attendance",
      description:
        "Track student attendance automatically with smart devices and reduce manual effort.",
      icon: "/icons/attendance.svg",
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
        <h2 className="text-3xl font-bold text-center mb-12">Our Smart Class Features</h2>
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
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
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
           src="/public/images/smart-classroom.jpg"

            alt="Smart Classroom"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}
