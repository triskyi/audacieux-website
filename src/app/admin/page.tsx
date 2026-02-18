

"use client";
import Link from "next/link";
import { Home, Building2, Video, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";


export default function AdminDashboard() {
  const router = useRouter();
  const handleLogout = useCallback(() => {
    // Remove cookie
    document.cookie = "admin-auth=; path=/; max-age=0";
    // Remove localStorage
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef] flex flex-col">
      <header className="bg-white shadow-sm py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Home className="text-[#0d4f3a] w-8 h-8" />
          <span className="text-2xl font-bold text-[#0d4f3a] tracking-tight">Admin Dashboard</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/" className="bg-yellow-400 text-[#0d4f3a] px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-md">Back to Site</Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-400 transition-all shadow-md"
            title="Logout"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="max-w-3xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/admin/properties" className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all">
            <Building2 className="w-14 h-14 text-yellow-400 group-hover:text-[#0d4f3a] mb-4" />
            <h2 className="text-xl font-bold text-[#0d4f3a] mb-2">Manage Properties</h2>
            <p className="text-gray-600 text-center">Add, edit, and remove property listings. Upload images, set prices, and manage details for all properties.</p>
          </Link>
          <Link href="/admin/shorts" className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all">
            <Video className="w-14 h-14 text-yellow-400 group-hover:text-[#0d4f3a] mb-4" />
            <h2 className="text-xl font-bold text-[#0d4f3a] mb-2">Manage Shorts Videos</h2>
            <p className="text-gray-600 text-center">Upload and manage short videos for marketing and property showcases. Edit video details and categories.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
