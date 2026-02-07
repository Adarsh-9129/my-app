export default function SchoolPage() {
  return (
    <main className="bg-gradient-to-br from-emerald-50 via-white to-green-100 text-slate-700 overflow-x-hidden">

      {/* FUN HERO */}
      <section className="relative text-center py-28 px-6 bg-gradient-to-r from-emerald-700 to-green-900 text-white">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />

        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          🎓 Maa Urmila International Public School
        </h1>
        <p className="mt-6 text-lg md:text-xl opacity-90">
          Where Learning is Fun & Futures are Bright ✨
        </p>
      </section>

      {/* STICKY FUN NAV */}
      <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-8 font-semibold">
          {["Home","About","Classes","Teachers","Contact"].map(item=>(
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-emerald-600 hover:scale-110 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* WELCOME */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">
          🌈 Welcome to a Happy Learning Place
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Since 2005, we’ve been shaping minds with knowledge, discipline and joy.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-28">

        {/* ABOUT */}
        <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
          <span className="absolute -top-6 left-6 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm">
            💡 About Us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-6">
            Learning with Values
          </h2>
          <p className="mt-6 max-w-3xl">
            Maa Urmila International Public School is a co-educational institution
            where academics meet creativity, sports meet discipline, and every
            child matters ❤️
          </p>
        </div>

        {/* CLASSES FUN */}
        <div>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            📚 Our Learning Stages
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["🧸","Nursery – UKG"],
              ["✏️","Class I – V"],
              ["🧪","Class VI – VIII"],
              ["🚀","Class IX – XII"],
            ].map(([icon,cls],i)=>(
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-10 text-center shadow-xl hover:-rotate-2 hover:scale-105 transition duration-300"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <p className="font-bold text-lg">{cls}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEACHERS SUPER FUN */}
        <div>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
            👩‍🏫 Meet Our Super Teachers
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              ["Mrs. Sukiriti Mala","English","5 Years"],
              ["Mr. Nitin Kumar Mishra","Mathematics","3 Years"],
              ["Ms. Sakshi Shukla","Science","2 Years"],
              ["Mr. Ansh Singh","Social Science","5 Years"],
            ].map(([name,sub,exp],i)=>(
              <div
                key={i}
                className="relative bg-gradient-to-br from-emerald-100 to-green-200 rounded-[30px] p-8 text-center shadow-2xl hover:-translate-y-4 hover:rotate-1 transition"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ {sub}
                </div>
                <h3 className="mt-8 text-xl font-extrabold text-emerald-900">
                  {name}
                </h3>
                <p className="mt-4">🎓 Experience: {exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FRIENDLY */}
        <div className="bg-gradient-to-r from-emerald-700 to-green-800 text-white rounded-3xl p-14 shadow-2xl">
          <h2 className="text-3xl font-bold">📞 Let’s Talk</h2>
          <div className="mt-6 space-y-3 text-lg">
            <p>📍 Near Main Road, Lahrpur Nagar, Sitapur</p>
            <p>📱 +91 6307779480</p>
            <p>✉️ info@maa-urmila-school.com</p>
            <p>🕘 Mon – Sat (9:00 AM – 3:00 PM)</p>
          </div>
        </div>

      </section>

      {/* FUN FOOTER */}
      <footer className="text-center py-6 bg-emerald-950 text-emerald-200">
        💚 © 2026 Maa Urmila International Public School — Learning is Fun!
      </footer>

    </main>
  )
}
