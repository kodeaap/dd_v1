// src/components/shared/TabButton.jsx
import React from 'react';

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
      active 
        ? 'bg-lime-300 text-black hover:bg-lime-400' 
        : 'bg-black/40 text-lime-300 border border-lime-300/20 hover:border-lime-300/40'
    }`}
  >
    {children}
  </button>
);

export default TabButton;