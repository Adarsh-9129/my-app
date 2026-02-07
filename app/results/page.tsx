export default function ResultsPage() {
  const data = {
    class10: { appeared: 600, passed: 520 },
    class12: { appeared: 440, passed: 400 },
  };

  const calculatePercentage = (passed, appeared) =>
    ((passed / appeared) * 100).toFixed(2);

  const Bar = ({ label, value, max, color }) => (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2 font-medium">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-4 ${color}`}
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-12">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-extrabold text-blue-700 border-l-4 border-orange-400 pl-4">
            Academic Results
          </h1>
          <p className="mt-3 text-xl font-semibold text-gray-700">
            Maa Urmila International Public School
          </p>
          <p className="text-sm text-gray-500 mt-1">
            CBSE Board Performance Overview
          </p>
        </div>

        {/* Result Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Class 10 */}
          <div className="bg-blue-50 rounded-2xl p-8 relative">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Class 10 Result
            </h2>

            <p className="text-lg font-bold text-green-600 mb-6">
              Pass Percentage:{" "}
              {calculatePercentage(
                data.class10.passed,
                data.class10.appeared
              )}
              %
            </p>

            <Bar
              label="Students Appeared"
              value={data.class10.appeared}
              max={600}
              color="bg-orange-400"
            />
            <Bar
              label="Students Passed"
              value={data.class10.passed}
              max={600}
              color="bg-indigo-600"
            />
          </div>

          {/* Class 12 */}
          <div className="bg-blue-50 rounded-2xl p-8 relative">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Class 12 Result
            </h2>

            <p className="text-lg font-bold text-green-600 mb-6">
              Pass Percentage:{" "}
              {calculatePercentage(
                data.class12.passed,
                data.class12.appeared
              )}
              %
            </p>

            <Bar
              label="Students Appeared"
              value={data.class12.appeared}
              max={600}
              color="bg-orange-400"
            />
            <Bar
              label="Students Passed"
              value={data.class12.passed}
              max={600}
              color="bg-indigo-600"
            />
          </div>

        </div>

        {/* Legend */}
        <div className="flex gap-10 mt-14 justify-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-orange-400 rounded"></span>
            Appeared
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-indigo-600 rounded"></span>
            Passed
          </div>
        </div>

        {/* School Result Content */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Outstanding Board Results
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            The excellent pass percentages in both Class 10 and Class 12 clearly
            reflect the academic strength of Maa Urmila International Public
            School. Our students continue to perform with confidence and
            consistency in CBSE Board examinations.
          </p>
        </div>

      </div>
    </div>
  );
}
