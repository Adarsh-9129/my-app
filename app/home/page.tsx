"use client"

import { useEffect, useState } from "react"

const slides = [
  "https://educationsnapshots.com/wp-content/uploads/sites/4/2018/11/campus-international-school-cleveland-5.jpg",
  "https://spaces4learning.com/-/media/EDU/SPM/Images/2019/10/SportsFacilities01x640.jpg",
  "https://www.ipsbhopal.com/Campus/images/IPS-academics1f.jpg",
]

export default function Home() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const i = setInterval(() => {
      setActive((p) => (p + 1) % slides.length)
    }, 4500)
    return () => clearInterval(i)
  }, [])

  return (
    <main className="bg-[#f8fafc] text-slate-800 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-extrabold tracking-wide text-lg">
            MAA URMILA IPS
          </h1>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {["Home","About","Academics","Facilities","Contact"].map(i=>(
              <a key={i} href={`/${i.toLowerCase()}`} className="hover:text-blue-600">
                {i}
              </a>
            ))}
            <a
              href="/admissions"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </header>

      {/* HERO WOW */}
      <section className="relative h-screen flex items-center justify-center">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/60" />

        <div className="relative z-10 text-center text-white px-6">
          <img
            src="/image/ChatGPT Image Jan 6, 2026, 05_19_20 PM.png"
            className="mx-auto w-32 drop-shadow-xl animate-pulse"
          />
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Shaping <span className="text-blue-400">Future Leaders</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-200">
            A world-class CBSE institution nurturing excellence, discipline & values
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-xl">
              Explore Campus
            </a>
            <a className="px-8 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
              Admissions 2026
            </a>
          </div>
        </div>
      </section>

      {/* WOW STATS */}
      <section className="relative -mt-24 z-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-3xl shadow-2xl p-10 text-center">
          {[
            ["15+", "Years of Excellence"],
            ["1200+", "Students"],
            ["80+", "Faculty"],
            ["100%", "Results"],
          ].map(([num, txt], i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold text-blue-600">{num}</h3>
              <p className="mt-2 text-slate-600">{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES WOW */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          ["🎓","Academics","CBSE + smart education"],
          ["🧪","Facilities","Labs, sports & tech"],
          ["🌍","Activities","Clubs & competitions"],
        ].map(([icon,title,desc],i)=>(
          <div
            key={i}
            className="group bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >
            <div className="text-5xl">{icon}</div>
            <h3 className="mt-6 text-2xl font-bold group-hover:text-blue-600">
              {title}
            </h3>
            <p className="mt-4 text-slate-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Parents Say</h2>
          <p className="mt-8 text-lg italic opacity-90">
            “This school has transformed my child’s confidence and academics.
            Teachers truly care.”
          </p>
          <p className="mt-4 font-semibold">— Parent of Class VIII Student</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        © 2026 Maa Urmila International Public School • Designed with ❤️
      </footer>
    </main>
  )
}
