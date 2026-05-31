import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">
        Resume Analyzer
      </h1>

      <nav className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
}

export default Header;