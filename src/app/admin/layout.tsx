import type { ReactNode } from "react";
import "../globals.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef] min-h-screen antialiased">
        {children}
      </div>
  );
}
