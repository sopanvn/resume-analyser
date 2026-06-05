import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;