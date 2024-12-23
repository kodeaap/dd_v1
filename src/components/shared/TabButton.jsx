import React from 'react';

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
      active 
        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-pink-600 hover:to-purple-600' 
        : 'bg-black/40 text-pink-300 gen-border hover:border-pink-500/40'
    }`}
  >
    {children}
  </button>
);

export default TabButton;