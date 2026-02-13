'use client';

import { useState } from 'react';

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    classApplying: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSubmitted(true);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        classApplying: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-16">
      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">
        Admissions 2026
      </h1>

      {/* Intro Section */}
      <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg mb-12">
        Maa Urmila Devi International Public School welcomes aspiring students to join our 
        vibrant learning community. We provide a world-class CBSE curriculum focusing on 
        academic excellence, holistic development, and nurturing leadership skills.
      </p>

      {/* Admission Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Admission Enquiry Form
        </h2>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            ✓ Thank you! Your enquiry has been submitted successfully. We'll contact you soon.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            ✗ Error: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Class Applying For
            </label>
            <select
              name="classApplying"
              value={formData.classApplying}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class I – V">Class I – V</option>
              <option value="Class VI – X">Class VI – X</option>
              <option value="Class XI – XII">Class XI – XII</option>
            </select>
          </div>

          {/* Parent Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Parent / Guardian Name
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter parent name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Any specific query"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-10 py-3 rounded-full font-semibold transition ${
                loading
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center text-gray-700 space-y-4">
        <p>
          For admissions inquiries, contact our office at{" "}
          <span className="font-semibold">+91 12345 67890</span> or email us at{" "}
          <span className="font-semibold">admissions@maaurmiladevi.edu.in</span>.
        </p>
        <p>
          Our admissions team will assist you with the enrollment process and guide you 
          through the requirements and procedures.
        </p>
      </div>
    </div>
  );
}
