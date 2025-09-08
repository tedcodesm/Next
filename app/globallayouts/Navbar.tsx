"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyApp</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/about/me" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <Link href="/auth/login" className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 hover:cursor-pointer transition">
LogIn          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
          <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 hover:cursor-pointer transition">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
