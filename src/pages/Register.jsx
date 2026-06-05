import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      console.log("Register Success:", res.data);

      // redirect to login
      navigate("/");
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-black text-white p-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Better Resumes
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Upload your resume and receive AI-powered
            insights to improve your chances of getting hired.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">
              Create Account 🚀
            </h2>

            <p className="text-gray-500">
              Start your journey today
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Register
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?
            <Link to="/" className="text-black font-semibold ml-1">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;