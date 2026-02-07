"use client"

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-emerald-100 text-slate-700">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          📞 Contact Us
        </h1>
        <p className="mt-6 text-lg opacity-90">
          We’d love to hear from you — let’s talk!
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            ✍️ Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Subject</label>
              <input
                type="text"
                placeholder="Admission, Feedback, Query..."
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Message</label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-xl hover:scale-105 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            📍 Reach Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 shadow">
              <p className="text-xl">📍</p>
              <p className="mt-2 font-semibold">
                Lahrpur Road, Vill Patwara, District Sitapur
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow">
              <p className="text-xl">📞</p>
              <p className="mt-2 font-semibold">
                +91 6307779480
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow">
              <p className="text-xl">✉️</p>
              <p className="mt-2 font-semibold">
                info@maa-urmila-school.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP CTA (OPTIONAL) */}
      <section className="text-center py-20">
        <a
          href="https://maps.google.com"
          target="_blank"
          className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-110 transition"
        >
          🗺️ Open in Google Maps
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 text-center py-8">
        <p>📍 Lahrpur Road, Vill Patwara, District Sitapur</p>
        <p>📞 +91 6307779480 | ✉ info@maa-urmila-school.com</p>
        <p className="mt-2">
          © 2026 Maa Urmila International Public School | All Rights Reserved
        </p>
      </footer>

    </main>
  )
}
