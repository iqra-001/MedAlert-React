import React from 'react';
import { Link } from 'react-router-dom';
import hero from "../assets/Images/home.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-20 px-6 py-4 flex justify-between items-center shadow-md bg-teal-600 bg-opacity-90">
        <div className="text-2xl font-bold">MedAlert</div>

        {/* Simple desktop menu only */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:underline">About Us</Link>
          </li>
          {/* Add more links here if you want */}
        </ul>
      </nav>

      {/* Spacer */}
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
          Your personal medication reminder and health calendar. Stay on top of your health, every day with your alerts ever helpful.
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
