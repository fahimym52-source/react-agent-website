import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";
import Img from "../../assets/Images/dashboardImage/mine.jpg";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className=" fixed left-0 top-0 w-40 md:w-64 h-screen bg-sidebar text-white p-6">
        <h2 className="text-2xl font-bold mb-10">MyApp</h2>
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex  items-center gap-3 p-3 rounded-lg ${
                isActive ? "bg-primary , text-dark" : "hover:bg-primary-hover"
              }`
            }
          >
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive ? "bg-primary , text-dark" : "hover:bg-primary-hover"
              }`
            }
          >
            <FaUser />
            Profile
          </NavLink>

          {/* <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-800"
              }`
            }
          >
            <FaCog />
            Settings
          </NavLink> */}

          {/* <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-800"
              }`
            }
          >
            <FaComments />
            Message
          </NavLink> */}

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive ? "bg-primary , text-dark" : "hover:bg-primary-hover"
              }`
            }
          >
            <FaSignOutAlt />
            Logout
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className=" bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-80 px-4 py-2 rounded-lg bg-gray-100 outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xl">🔔</span>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full ">
                <img className=" bg-center bg-cover" src={Img} alt="" />
              </div>

              <span className="font-medium text-gray-700">Mohammad</span>
            </div>
          </div>
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
