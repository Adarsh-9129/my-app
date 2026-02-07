export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-16">

      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">
        School Activities
      </h1>

      {/* Intro */}
      <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg mb-16">
        At Maa Urmila Devi International Public School, we believe learning goes
        beyond classrooms. Our activities help students grow mentally,
        physically, and socially.
      </p>

      {/* Activities Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Art & Craft
          </h3>
          <p className="text-gray-700">
            Creative activities including drawing, painting and craft work.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">🎵</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Music & Dance
          </h3>
          <p className="text-gray-700">
            Classical and modern music and dance to boost confidence.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">⚽</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Sports & Games
          </h3>
          <p className="text-gray-700">
            Outdoor and indoor games for physical fitness and teamwork.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">🧪</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Science Activities
          </h3>
          <p className="text-gray-700">
            Experiments, science fairs and innovation-based learning.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">🎤</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Debates & Speaking
          </h3>
          <p className="text-gray-700">
            Improves communication, confidence and leadership skills.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-4xl mb-4">🧘‍♂️</div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Yoga & Meditation
          </h3>
          <p className="text-gray-700">
            Helps students stay focused, calm and healthy.
          </p>
        </div>

      </div>
    </div>
  );
}
