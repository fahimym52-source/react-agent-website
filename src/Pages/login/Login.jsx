import { useState } from "react";
import loginBg from "../../assets/Images/LoginImage/login1.png";
import { FaBolt, FaDesktop, FaHeart } from "react-icons/fa";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className="bg-light">
      <div className="min-h-screen pt-20 flex items-start md:items-center justify-center p-3 sm:p-6">
        <div className="w-full max-w-6xl min-h-[700px] bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row ">
          {/* Left Side */}
          <div
            className=" w-full md:w-1/2  text-white p-6 md:p-12 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${loginBg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold">MyApp</h2>
              <div className="mt-24">
                <h1 className="text-4xl font-bold">
                  Welcome <span className="text-primary">Back!</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Sign in to your account and continue your journey with us.
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ">
                    <FaBolt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">fast & Secure</h3>
                    <p className="text-gray-300">
                      Your data is always protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ">
                    <FaDesktop className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Access Anywhere</h3>
                    <p className="text-gray-300">
                      Use your account from any device.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ">
                    <FaHeart className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Better Experience</h3>
                    <p className="text-gray-300">
                      Get personalized features and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className=" w-full md:w-1/2 p-6  md:p-12">
            <div className="text-right text-sm">
              Don't have an account?
              <span className="text-primary ml-2 font-semibold">
                Register --
              </span>
            </div>

            <div className="mt-12">
              <h1 className="text-4xl font-bold text-slate-900">Login</h1>
              <p className="mt-4 text-gray-500">
                Enter your email and password to sign in to your account.
              </p>
            </div>

            <form
              className="mt-10"
              onSubmit={(e) => {
                e.preventDefault();
                setEmailError("");
                setPasswordError("");

                if (email && !email.includes("@")) {
                  setEmailError("Please enter a valid email");
                }

                if (!email) {
                  setEmailError("Email is required");
                }

                if (!password) {
                  setPasswordError("Password is required");
                }
                if (password && password.length < 6) {
                  setPasswordError("Password must be at least 6 characters");
                }

                if (
                  email &&
                  email.includes("@") &&
                  password &&
                  password.length >= 6
                ) {
                  setUser({
                    name: name,
                    email: email,
                  });
                  setIsAuth(true);

                  navigate(from);
                }
              }}
            >
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-dark py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" p-5 rounded-r-2xl hover:bg-primary-hover bg-primary text-dark inline">
        <button
          onClick={() => navigate("/")}
          className="  text-2xl text-black font-bold p-10"
        >
          ←back
        </button>
      </div>
    </div>
  );
}
