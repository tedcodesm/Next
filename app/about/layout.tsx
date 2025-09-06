import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white mt-10 shadow-md p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6">MyApp</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/docs/dashboard" className="text-gray-700 hover:text-blue-500">
            Dashboard
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-500">
            Products
          </Link>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              🔔
            </button>
            
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
