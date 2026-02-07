export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-700">

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,.75), rgba(30,64,175,.65)), url('https://educationsnapshots.com/wp-content/uploads/sites/4/2018/11/campus-international-school-cleveland-5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            About Our School
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200">
            30+ years of excellence in education, values & student success
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* WHO WE ARE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
          <p className="mt-6 max-w-3xl">
            Established in 1995, Maa Urmila International Public School is
            dedicated to academic excellence, discipline, moral values and
            holistic development of students.
          </p>
        </div>

        {/* MISSION / VISION */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
            <p className="mt-4">
              To nurture confident, responsible and lifelong learners through
              quality education and strong values.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            <p className="mt-4">
              To be a leading institution known for excellence in education and
              character building.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-12 grid grid-cols-2 md:grid-cols-4 text-center shadow-2xl">
          {[
            ["30+", "Years of Excellence"],
            ["1200+", "Students"],
            ["80+", "Faculty"],
            ["95%", "Board Results"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold">{num}</h3>
              <p className="mt-2 opacity-90">{label}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Why Choose Our School?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["🎓", "Experienced Teachers", "Qualified & caring faculty"],
              ["🏫", "Modern Infrastructure", "Smart classrooms & labs"],
              ["⚽", "Sports & Activities", "All-round development"],
              ["🔒", "Safe Environment", "24×7 campus security"],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-blue-600">
                  {title}
                </h3>
                <p className="mt-3">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JOURNEY */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Our Journey
          </h2>

          <ul className="border-l-4 border-blue-600 pl-8 space-y-6">
            {[
              "1995 – School Established",
              "2005 – Campus Expansion",
              "2015 – Smart Education Introduced",
              "2025 – 1000+ Happy Students",
            ].map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PRINCIPAL MESSAGE */}
        <div className="bg-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Principal’s Message
          </h2>
          <p className="mt-6 italic">
            “Every child is unique. Our goal is to unlock their potential through
            guidance, discipline and care.”
          </p>
          <p className="mt-4 font-semibold">
            — Mrs. Sukiriti Mala, Principal
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-16">
          <h2 className="text-4xl font-extrabold">
            Join Our School Community
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Admissions Open for 2026–27
          </p>
          <a
            href="/admissions"
            className="inline-block mt-8 bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            Apply for Admission
          </a>
        </div>

      </section>
    </main>
  )
}
