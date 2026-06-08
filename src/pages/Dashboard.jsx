import ResumeUpload from "../components/ResumeUpload";

function Dashboard()
{
  const recentResumes = [
    {
      id: 1,
      name: "",
      score: '',
      date: "",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Analyze resumes and improve ATS performance.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
         <ResumeUpload />
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-gray-500">
            Total Uploads
          </h3>

          <p className="text-4xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-gray-500">
            Average ATS Score
          </h3>

          <p className="text-4xl font-bold mt-2">
            84%
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-gray-500">
            Best Score
          </h3>

          <p className="text-4xl font-bold mt-2">
            92%
          </p>
        </div>

      </div>

      {/* Recent Analysis */}
      <div className="bg-white rounded-3xl shadow-md p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Recent Analyses
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Resume</th>
                <th className="text-left py-4">ATS Score</th>
                <th className="text-left py-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentResumes.map((resume) => (
                <tr
                  key={resume.id}
                  className="border-b last:border-none"
                >
                  <td className="py-4">
                    {resume.name}
                  </td>

                  <td className="py-4 font-semibold">
                    {resume.score}%
                  </td>

                  <td className="py-4 text-gray-500">
                    {resume.date}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
