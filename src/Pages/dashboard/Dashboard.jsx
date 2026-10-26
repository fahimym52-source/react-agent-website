import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import {
  FaUsers,
  FaProjectDiagram,
  FaEnvelope,
  FaDollarSign,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", users: 10 },
  { name: "Sun", users: 30 },
  { name: "Mon", users: 40 },
  { name: "Tue", users: 50 },
  { name: "Wed", users: 35 },
  { name: "Thu", users: 70 },
  { name: "Fri", users: 80 },
];
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 flex ">
      {/* Header */}

      <div className="flex-1">
        {/* Content */}
        <main className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-dark">
              <p>Welcome back, {user?.name}👋</p>
              <p>{user?.email}</p>
            </h2>

            <p className="mt-2 text-body">
              Here’s what’s happening with your account today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#FFF4CC] flex items-center justify-center text-primary text-xl mb-4">
                <FaUsers />
              </div>
              <p className="text-muted">Total Users</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">1,245</h3>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border  shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#FFF4CC] flex items-center justify-center text-primary text-xl mb-4">
                <FaProjectDiagram />
              </div>
              <p className="text-muted">Projects</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">10</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#FFF4CC] flex items-center justify-center text-primary text-xl mb-4">
                <FaEnvelope />
              </div>
              <p className="text-muted">Message</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">86</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#FFF4CC] flex items-center justify-center text-primary text-xl mb-4">
                <FaDollarSign />
              </div>
              <p className="text-muted">Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">100$</h3>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-xl border border-border shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-dark">Overview</h3>

                <p className="text-muted mt-1">Your activity overview</p>
              </div>

              <select className="border border-gray-200 rounded-lg px-4 py-2 text-body outline-none">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#231321"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-8 bg-white border border-border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-dark">Quick Actions</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <button className="p-4 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100">
                + New Project
              </button>

              <button className="p-4 rounded-lg bg-green-50 text-green-600 font-medium hover:bg-green-100">
                ✉ Send Message
              </button>

              <button className="p-4 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-gray-100">
                ⚙ Settings
              </button>
            </div>
          </div>
          <div className="mt-8 bg-white border border-border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-dark">Recent Activity</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-body">Created a new project</p>
                  <p className="text-sm text-muted">Website Design</p>
                </div>

                <span className="text-sm text-muted">2 hours ago</span>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-body">Sent a message</p>
                  <p className="text-sm text-muted">To: Development Team</p>
                </div>

                <span className="text-sm text-muted">5 hours ago</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-body">Updated profile</p>
                  <p className="text-sm text-muted">Profile information</p>
                </div>

                <span className="text-sm text-muted">Yesterday</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-xl font-bold text-dark">Your Goals</h3>

            <div className="mt-6 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-body">Learn React</span>

                  <span className="text-sm text-muted">70%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-body">
                    Learn JavaScript
                  </span>

                  <span className="text-sm text-muted">85%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">
                    Build 5 Projects
                  </span>

                  <span className="text-sm text-gray-500">60%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">
                    Learn Backend
                  </span>

                  <span className="text-sm text-gray-500">40%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
