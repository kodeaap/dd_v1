import React from 'react';

const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white/60">
      <div className="handwritten">
        © 2024 De-Gen Diaries
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-white transition-colors handwritten">Terms</a>
        <a href="#" className="hover:text-white transition-colors handwritten">Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;