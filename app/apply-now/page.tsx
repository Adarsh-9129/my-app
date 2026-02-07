"use client";

import { useState } from "react";

export default function ApplyNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Application Submitted:", formData);

    alert("Your application has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      class: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Apply Now
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Fill the form below to apply for admission
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Applying For Class
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">KG</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any additional information"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
