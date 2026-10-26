import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCamera,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";
import img from "../../assets/Images/dashboardImage/mine1.jpg";

export default function Profile() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark">Profile</h1>

        <p className="mt-2 text-body">
          Manage your personal information and account details.
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="bg-white rounded-xl border border-border shadow-sm p-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto">
              <div className="w-32 h-32 overflow-hidden rounded-full bg-blue-100 flex items-center justify-center t text-5xl">
                <img src={img} alt="" />
              </div>

              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-dark flex items-center justify-center hover:bg-primary-hover hover:text-blue-50">
                <FaCamera />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-dark mt-5">
              Mohammad Fahimy
            </h2>

            <p className="text-body mt-1">Frontend Developer</p>

            <div className="flex items-center justify-center gap-2 mt-4 text-primary">
              <FaCheckCircle />
              <span className="text-sm font-medium">Active Account</span>
            </div>
          </div>

          <div className="border-t mt-6 pt-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <FaEnvelope className="text-primary" />
              <span className="text-body">fahimym152@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaPhone className="text-primary" />
              <span className="text-body">+93 764 620 603</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaMapMarkerAlt className="text-primary" />
              <span className="text-body">Herat, Afghanistan</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-primary text-dark py-3 rounded-lg font-medium hover:bg-primary-hover flex items-center justify-center gap-2">
            <FaCamera />
            Change Photo
          </button>
        </div>

        {/* Right Information Card */}
        <div className="lg:col-span-2 bg-white border border-border rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-dark">
                Personal Information
              </h2>

              <p className="text-body mt-1">
                Your personal account information
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-dark font-medium hover:bg-blue-100">
              <FaEdit />
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Full Name
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                Mohammad Fahimy
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Email Address
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                fahimym152@gmail.com
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Phone Number
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                +93 764 920 603
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Location
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                Herat, Afghanistan
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Username
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                @mohammad
              </div>
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Job Title
              </label>

              <div className="w-full px-4 py-3 bg-gray-50 rounded-lg text-body">
                Frontend Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="mt-6 bg-white border border-border rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-dark">Account Information</h2>

        <p className="text-body mt-1">Basic information about your account</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Username */}
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-body">Username</p>
            <h3 className="text-lg font-semibold text-dark mt-2">@mohammad</h3>
          </div>

          {/* Account Status */}
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-body">Account Status</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-primary"></span>

              <h3 className="text-lg font-semibold text-dark">Active</h3>
            </div>
          </div>

          {/* Member Since */}
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-body">Member Since</p>

            <h3 className="text-lg font-semibold text-dark mt-2">2026</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
