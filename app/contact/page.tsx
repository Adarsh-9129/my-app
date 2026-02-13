"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-semibold" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold" htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Admission, Feedback, Query..."
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {status === "error" && (
              <div className="p-4 bg-red-100 text-red-700 rounded-xl">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="p-4 bg-green-100 text-green-700 rounded-xl">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-xl hover:scale-105 transition ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {status === "loading" ? "Sending..." : "🚀 Send Message"}
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
  );
}
