"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface DemoFormData {
  studentName: string;
  parentEmail: string;
  phone: string;
  className: string;
  message: string;
}

export default function RequestDemo() {
  const [form, setForm] = useState<DemoFormData>({
    studentName: "",
    parentEmail: "",
    phone: "",
    className: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({
        studentName: "",
        parentEmail: "",
        phone: "",
        className: "",
        message: "",
      });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {/* MAIN DEMO SECTION */}
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
                name="studentName"
                placeholder="Student Name"
                value={form.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="email"
                name="parentEmail"
                placeholder="Parent Email"
                value={form.parentEmail}
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
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>

              {status === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                  Demo request submitted successfully! We'll contact you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {status === "loading" ? "Submitting..." : "Request Demo"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* EXTRA INFO SECTION */}
      <section className="bg-gray-50 py-16 px-6 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Why Choose Our School?
          </h2>

          <p className="text-lg mb-8 text-gray-600">
            We focus on quality education, discipline, and overall personality development.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* BOX 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                📍 School Address
              </h3>
              <p>
                Maa Urmila International Public School,<br />
                Main Road, Your City
              </p>
            </div>

            {/* BOX 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                📞 Contact Us
              </h3>
              <p>
                Phone: +91 98765 43210<br />
                Email: info@yourschool.com
              </p>
            </div>

            {/* BOX 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                ⏰ Office Timing
              </h3>
              <p>
                Monday - Saturday<br />
                8:00 AM - 3:00 PM
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-600 text-sm">
            📌 Our team will contact you within 24 hours after submitting the demo request.
          </p>
        </div>
      </section>
    </>
  );
}
