import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero from "../assets/Images/home.png";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-20 px-6 py-4 flex justify-between items-center shadow-md bg-teal-600 bg-opacity-90">
        <div className="text-2xl font-bold">MedAlert</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'Medications', 'Calendar', 'About'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:underline"
                onClick={handleLinkClick}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4 md:hidden z-10 bg-teal-600 bg-opacity-95 text-white">
            {['Home', 'Medications', 'Calendar', 'About'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline text-lg"
                  onClick={handleLinkClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Spacer to avoid content hidden behind navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col justify-center items-center px-6 text-center py-28 md:py-40 text-white"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ textShadow: '0 0 8px rgba(0,0,0,0.3)' }}
        >
          Welcome to MedAlert
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mb-10">
          Your personal medication reminder and health calendar. Stay on top of your health, every day.
        </p>
        <Link
  to="/signup"
  className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
>
  Get Started
</Link>

      </section>

      {/* Footer */}
      <footer className="py-6 text-center mt-auto bg-teal-600 bg-opacity-90 text-white">
        <p>&copy; {new Date().getFullYear()} MedAlert. All rights reserved.</p>
      </footer>
    </div>
  );
}
