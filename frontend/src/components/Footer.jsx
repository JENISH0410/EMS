import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* EMS Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">EMS</h2>
          <p className="text-white/90">Empowering Management System for your organization. Simplify tasks and streamline your workflow.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/features" className="hover:underline">Features</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><NavLink to="/faq" className="hover:underline">FAQs</NavLink></li>
            <li><NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mb-3">
            <a href="#" aria-label="Facebook" className="hover:text-blue-100"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-100"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-100"><FaInstagram size={20} /></a>
          </div>
          <p>Email: <a href="mailto:support@ems.com" className="underline">support@ems.com</a></p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-cyan-500 text-center py-4 text-white text-xs md:text-sm">
        &copy; {new Date().getFullYear()} EMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
