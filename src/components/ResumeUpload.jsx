console.log("ENV:", import.meta.env);
console.log("API:", import.meta.env.VITE_API_URL);

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function ResumeUpload() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await axios.post(
        `${API}/api/resume/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Analysis Result:", res.data);

      navigate("/report", {
        state: {
          report: res.data,
        },
      });
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Failed to analyze resume"
      );
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
        Upload your PDF resume for ATS analysis.
      </p>

      <div
        className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer hover:border-black transition"
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
            <p className="font-semibold text-lg">
              {file.name}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </>
        )}
      </div>

      {file && (
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Analyzing Resume..." : "Analyze Resume"}
        </button>
      )}
    </div>
  );
}

export default ResumeUpload;