export default function AchievementsPage() {
  const achievements = [
    {
      title: "Academic Excellence",
      description:
        "Our students consistently achieve top grades across CBSE examinations, demonstrating a commitment to knowledge and critical thinking.",
      icon: "🎓",
    },
    {
      title: "Professional Course Selections",
      description:
        "Students secure admissions in premier engineering, medical, and other professional institutions, paving their path to success.",
      icon: "🏆",
    },
    {
      title: "Scholarships & Awards",
      description:
        "Meritorious students are recognized with scholarships and awards, motivating excellence and fostering confidence.",
      icon: "🎖️",
    },
    {
      title: "Civil Services Achievements",
      description:
        "Several alumni have cleared prestigious civil services examinations, exemplifying dedication and discipline.",
      icon: "🏛️",
    },
    {
      title: "Global University Admissions",
      description:
        "Top-performing students receive offers from renowned universities worldwide, showcasing international competitiveness.",
      icon: "🌍",
    },
    {
      title: "Other Recognitions",
      description:
        "Students are recognized in competitions, conferences, and community initiatives, reflecting holistic growth.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-20">
      {/* Page Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide">
          ACHIEVEMENTS
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Achievements Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-blue-100 
                       shadow-lg rounded-3xl p-10 
                       hover:-translate-y-2 hover:shadow-2xl 
                       transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="text-4xl">{item.icon}</div>
              <h2 className="text-2xl font-semibold text-blue-700">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    
  );
}
