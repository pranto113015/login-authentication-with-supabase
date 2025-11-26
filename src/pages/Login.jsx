import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate("/dashboard");
  };

  // Google login
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) setErrorMessage(error.message);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-sm">

        {/*TOP ICON ADDED HERE */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM4.5 21a8.25 8.25 0 1115 0H4.5z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Welcome To Panel</h1>
        <p className="text-center text-gray-500 mb-6">Please login to continue</p>

        {errorMessage && (
          <p className="text-red-500 text-center text-sm mb-3">{errorMessage}</p>
        )}

        {/* Email Login Form */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-5 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
