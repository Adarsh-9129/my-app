"use client";

import { useState } from "react";

export default function RequestDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo Request Submitted Successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      className: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Request a Free Demo Class
          </h2>

          <p className="text-lg mb-6 text-blue-100">
            Experience our smart teaching system and modern classrooms.
            Book a free demo session for your child today.
          </p>

          <ul className="space-y-3 text-blue-100">
            <li>✔ Smart Classrooms</li>
            <li>✔ Experienced Teachers</li>
            <li>✔ Digital Learning</li>
            <li>✔ Personal Attention</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">

          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
            Book Your Demo
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Parent Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="text"
              name="className"
              placeholder="Class (Eg: 5th, 8th, 10th)"
              value={form.className}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Request Demo
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
