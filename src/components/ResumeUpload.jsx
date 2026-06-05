import { useRef, useState } from "react";
import axios from "axios";

function ResumeUpload()
{
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setFile(selectedFile);
  };

  const handleAnalyze = async () => {
      if (!file) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("resume", file);

      const token = localStorage.getItem("token");

      try {
        setLoading(true);

        const res = await axios.post(
          "http://localhost:5000/api/resume/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResult(res.data);
        console.log("Analysis Done:", res.data);

      } catch (err) {
        console.log(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-semibold mb-2">
        Upload Resume
      </h2>

      <p className="text-gray-500 mb-6">
        Upload your PDF resume for analysis.
      </p>

      <div
        className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {!file ? (
          <>
            <p className="text-lg font-medium">
              Click to Upload Resume
            </p>

            <p className="text-sm text-gray-500 mt-2">
              PDF only
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold">
              {file.name}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </>
        )}
      </div>

      {file && (
        <button onClick={handleAnalyze} disabled={loading} className="bg-black text-white px-6 py-3 rounded-xl mt-4">
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      )}
      {result && (
        <div className="mt-4 text-green-600">
          {result.message}
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;