import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Report()
{
  const { state } = useLocation();

  if (!state?.report) {
    return <Navigate to="/dashboard" />;
  }

  const navigate = useNavigate();

  const report = state.report;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold">
            Resume Analysis Report
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Analyze Another Resume
            </button>
          </div>
        </div>

        {/* Score Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-gray-500 mb-2">
              ATS Score
            </h3>

            <p className="text-5xl font-bold">
              {report.score}%
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-gray-500 mb-2">
              Total Words
            </h3>

            <p className="text-5xl font-bold">
              {report.totalWords}
            </p>
          </div>

        </div>

        {/* Found Skills */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Found Skills
          </h2>

          {report.foundSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {report.foundSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-red-500">
              No matching skills found.
            </p>
          )}
        </div>

        {/* Missing Skills */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Missing Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {report.missingSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Suggestions
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {report.suggestions.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Report;