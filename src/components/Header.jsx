import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between">
      
      {/* LEFT */}
      <h1 className="font-bold text-xl">
        Resume Analyzer
      </h1>

      {/* MIDDLE NAV */}
      <nav className="flex gap-4 items-center">
        <Link to="/dashboard">Dashboard</Link>
        {/* <Link to="/history">History</Link> */}

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

    </header>
  );
}

export default Header;
