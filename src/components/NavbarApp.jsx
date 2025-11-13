import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaUser } from "react-icons/fa";

export default function NavbarApp() {
    const [open, setOpen] = useState(false);


    return (
        <nav className="w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-indigo-600">Crud Op App</Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">Home</Link>
                            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">About</Link>
                            <Link to="/users" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">Users</Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <button className="flex items-center text-gray-700 hover:text-indigo-600">
                                <FaUser className="mr-2" />
                                <span className="text-sm">Profile</span>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none">
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {open && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link to="/" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
                        <Link to="/about" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">About</Link>
                        <Link to="/users" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Users</Link>
                        <button onClick={() => setOpen(false)} className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <FaUser className="mr-2" /> Profile
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
