// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="border-t border-lime-300/20 backdrop-blur-sm bg-black/60">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-6">
          <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Twitter</a>
          <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Discord</a>
          <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Blog</a>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;