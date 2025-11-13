import React from 'react'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function FooterApp() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-white">Crud Demo App</h3>
            <p className="mt-2 text-sm text-gray-400">A simple CRUD demo built with React and Vite.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Follow</h4>
              <div className="mt-4 flex items-center space-x-4">
                <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
                <a href="#" aria-label="GitHub" className="hover:text-white"><FaGithub /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Crud Demo App. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
