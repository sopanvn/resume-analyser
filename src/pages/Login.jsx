import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();

      setError("");

      try {
        const res = await loginUser({
          email,
          password,
        });

        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");

      } catch (err) {
        setError(
          err.response?.data?.message || "Invalid email or password"
        );
      }
    };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-black text-white p-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            AI Resume Analyzer
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Analyze resumes with AI, improve ATS scores,
            and get smart recommendations instantly.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-blue-500 rounded-3xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-2 text-gray-900">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500">
            Login to continue
          </p>

          <form className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl outline-none focus:border-black"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl outline-none focus:border-black"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-black text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?

            <Link
              to="/register"
              className="text-black font-semibold ml-1"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
