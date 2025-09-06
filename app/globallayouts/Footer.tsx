import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyApp</h2>
          <p className="mt-3 text-sm text-gray-400">
            Building modern web & mobile experiences with love 💙.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

