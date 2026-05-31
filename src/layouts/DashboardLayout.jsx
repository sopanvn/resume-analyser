import Header from "../components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;