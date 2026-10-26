import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Components/Services/Services.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Team from "./Components/Team/Team.jsx";
import Contact from "./Pages/contact/Contact.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Pages/login/Login.jsx";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import DashboardLayout from "./Pages/dashboard/DashboardLayout.jsx";
import Profile from "./Pages/dashboard/Profile.jsx";
import ProtectedRoute from "./Components/Protected/ProtectedRoute.jsx";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const isDashboardPage =
    location.pathname === "/dashboard" ||
    location.pathname === "/profile" ||
    location.pathname === "/login";
  return (
    <div>
      {!isDashboardPage && <Navbar />}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/contact"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
