import React from "react";
import heroImage from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeLanding = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* NAVBAR (Visible on Landing Page Only) */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-950 shadow-lg fixed top-0 left-0 w-full z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-green-400">Samaritan</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-6"
        >
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <a href="#about" className="hover:text-green-400">
            About Us
          </a>
          <a href="#testimonials" className="hover:text-green-400">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact
          </a>

          <Link to="/login">
            <button className="bg-gray-700 px-4 py-1 rounded hover:bg-green-600">
              Login
            </button>
          </Link>
        </motion.div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[120vh] flex flex-col justify-center items-start px-25"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 pt-20">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-bold mb-4"
          >
            Your smile is our <span className="text-green-400">Joy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg max-w-xl"
          >
            You can monitor and manage your patient appointments easily with our
            simplified tool.
          </motion.p>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="px-16 py-28 bg-gray-950">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-green-400 mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-gray-300 leading-relaxed max-w-3xl"
        >
          Samaritan HealthCare System is a modern and reliable platform designed
          to simplify patient appointment management. We aim to improve
          communication between patients and doctors, reduce waiting times, and
          enhance service efficiency.
        </motion.p>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-16 py-28 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-green-400 mb-10"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Dr. Joseph", "Nurse Asha", "Admin Ben"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className="italic">
                {i === 0
                  ? "This system has greatly helped us manage patient flow more efficiently."
                  : i === 1
                  ? "Easy to use and saved us a lot of time at the reception."
                  : "A professional system with excellent features for monitoring appointments."}
              </p>
              <h4 className="mt-4 font-bold text-green-300">— {name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-400">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-6">
              Have questions or need assistance? Reach out to us anytime — we’re
              here to help.
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-semibold">Phone:</span> +255 712 345 678
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                support@samaritanhealth.com
              </p>
              <p>
                <span className="font-semibold">Location:</span> Arusha,
                Tanzania
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              Send us a message
            </h3>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="w-full p-3 bg-green-500 text-black font-semibold rounded hover:bg-green-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Samaritan HealthCare System — All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomeLanding;
