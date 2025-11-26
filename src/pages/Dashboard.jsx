import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load logged in user info
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    }
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-200 to-blue-300 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/40 backdrop-blur-xl p-6 shadow-xl hidden md:block">
        <h2 className="text-2xl font-bold text-indigo-700 mb-8">User Panel</h2>

        <nav className="space-y-4">
          <p className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600">
            Dashboard
          </p>
          <p className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600">
            Profile
          </p>
          <p className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600">
            Settings
          </p>
          <p className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600">
            Messages
          </p>
          <p className="text-gray-700 font-medium cursor-pointer hover:text-indigo-600">
            Notifications
          </p>
        </nav>
      </div>

      {/* Main Dashboard */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-center border border-white/40">

          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img
              src={
                user?.user_metadata?.avatar_url ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="User"
              className="w-28 h-28 rounded-full shadow-lg border-4 border-white"
            />
          </div>

          {/* Welcome Text */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome, {user?.user_metadata?.full_name || "User"}!
          </h1>

          {/* User Email */}
          <p className="text-lg text-gray-700 mb-5">
            {user?.email}
          </p>

          {/* Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

            <div className="bg-white/60 h-28 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition border border-white/40">
              <h3 className="text-xl font-bold text-indigo-700">Profile Info</h3>
              <p className="text-gray-600 text-sm">Update your information</p>
            </div>

            <div className="bg-white/60 h-28 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition border border-white/40">
              <h3 className="text-xl font-bold text-indigo-700">Messages</h3>
              <p className="text-gray-600 text-sm">Check your inbox</p>
            </div>

            <div className="bg-white/60 h-28 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition border border-white/40">
              <h3 className="text-xl font-bold text-indigo-700">Notifications</h3>
              <p className="text-gray-600 text-sm">See recent updates</p>
            </div>

            <div className="bg-white/60 h-28 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition border border-white/40">
              <h3 className="text-xl font-bold text-indigo-700">Settings</h3>
              <p className="text-gray-600 text-sm">Manage preferences</p>
            </div>

          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl shadow-lg font-semibold transition w-full"
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}
