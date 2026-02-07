export default function FacilitiesPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-slate-700">

      {/* HERO */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl" />

        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          🏫 Our World-Class Facilities
        </h1>
        <p className="mt-6 text-lg md:text-xl opacity-90">
          A campus designed for learning, safety & fun ✨
        </p>
      </section>

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-8 font-semibold">
          {["Home","About","Facilities","Contact"].map(item => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-blue-600 hover:scale-110 transition"
            >
              {item}
            </a>
          ))}
          <a
            href="/admissions"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* FACILITIES INTRO (NEW – UNIQUE, USER FRIENDLY) */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          🏗 Facilities That Inspire Excellence
        </h2>
        <p className="mt-6 text-lg leading-relaxed">
          At <strong>Maa Urmila International Public School</strong>, we believe
          that a great learning environment builds confident learners.
          Our campus is thoughtfully designed with modern infrastructure,
          advanced technology, and safe surroundings to support
          academic growth, creativity, sports, and overall development.
        </p>
      </section>

      {/* FACILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
          🌟 Campus Highlights
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Modern Classrooms","Smart boards & digital tools",
              "https://www.smarttech.com/-/media/project/smart/www/education/interactive-displays/classroom-stem-project-with-smart-board.jpg"],
            ["Library","10,000+ books & peaceful reading",
              "https://www.facetpublishing.co.uk/resources/images/article/Rimmer%20-%20Kind%20Librarian%20Twitter%20(22)(1).png"],
            ["Science Labs","Physics, Chemistry & Biology labs",
              "https://kmis.in/images/pages/sciencelab04_14_45.jpg"],
            ["Sports Complex","Football, basketball & indoor gym",
              "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1758926874/ccsk12com/wq236dmyabdxm8jcatmi/bosworth-gym-1900x1267.jpg"],
            ["Computer Lab","High-speed internet & latest systems",
              "https://media.istockphoto.com/id/2162383759/photo/modern-computer-classroom-with-monitors-and-blue-chairs.jpg"],
            ["Auditorium","Events, assemblies & performances",
              "https://rulonco.com/wp-content/uploads/2022/04/Chisolm-Trail-HS-1-scaled.jpg"],
          ].map(([title,desc,img],i)=>(
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition"
            >
              <img
                src={img}
                alt={title}
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-600">{title}</h3>
                <p className="mt-2">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            🔐 Safety & Security
          </h2>

          <ul className="mt-10 grid md:grid-cols-2 gap-6 text-lg">
            {[
              "24×7 CCTV Surveillance",
              "Trained Security Guards",
              "Fire Safety Equipment",
              "First Aid & Medical Room",
            ].map((item,i)=>(
              <li
                key={i}
                className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          🎨 Student Activities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "🎶 Music & Dance Room",
            "🎨 Art & Craft Studio",
            "🤖 Robotics & Coding Club",
            "🧘 Yoga & Meditation Hall",
          ].map((item,i)=>(
            <div
              key={i}
              className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 text-center font-semibold shadow hover:-rotate-1 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">💬 What Parents Say</h2>
          <p className="mt-8 italic text-lg opacity-90">
            “Excellent infrastructure and well-maintained labs.”
          </p>
          <p className="mt-2 font-semibold">— Mr. Mishra</p>

          <p className="mt-8 italic text-lg opacity-90">
            “My child loves the sports facilities.”
          </p>
          <p className="mt-2 font-semibold">— Mrs. Shukla</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-110 transition"
        >
          📅 Book a Campus Tour
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 text-center py-8">
        <p>📍 Lahrpur Road, Vill Patwara, District Sitapur</p>
        <p>📞 +91 6307779480 | ✉ info@maa-urmila-school.com</p>
        <p className="mt-2">
          © 2026 Maa Urmila International Public School
        </p>
      </footer>

    </main>
  )
}
