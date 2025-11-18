import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-950">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-green-400">Samaritan</h1>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About Us</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
          <button className="bg-gray-700 px-4 py-1 rounded hover:bg-green-600">Login</button>
          <button className="bg-green-500 px-4 py-1 rounded hover:bg-green-600">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-start px-16"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">
          Your smile is our <span className="text-green-400">Joy</span>
        </h2>
        <p className="text-lg max-w-xl">
          You can monitor and manage your patient appointments easily with our simplified tool.
        </p>
      </section>
    </div>
  );
};

export default Home;
