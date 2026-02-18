"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simple hardcoded check for demo; replace with real API/auth later
    if (username === "admin@odace.com" && password === "odace@12!12@") {
      // Set cookie for middleware authentication
      document.cookie = "admin-auth=true; path=/; max-age=86400";
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef]">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-[#0d4f3a] mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input input-bordered bg-gray-50 text-gray-900 placeholder-gray-500"
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="btn bg-[#0d4f3a] text-white hover:bg-[#1a7a55] w-full font-bold"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
