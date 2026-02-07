export default function AdmissionPage() {
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter student name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Class Applying For
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class I – V</option>
              <option>Class VI – X</option>
              <option>Class XI – XII</option>
            </select>
          </div>

          {/* Parent Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Parent / Guardian Name
            </label>
            <input
              type="text"
              placeholder="Enter parent name"
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
              placeholder="Enter mobile number"
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
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Any specific query"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Submit Enquiry
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
