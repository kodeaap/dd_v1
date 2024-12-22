// src/components/shared/GlowingButton.jsx
import React from 'react';

const GlowingButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`bg-lime-300 text-black px-6 py-2 rounded-full text-sm font-medium 
                hover:bg-lime-400 transition-all duration-300 transform hover:scale-105
                hover:shadow-[0_0_20px_rgba(132,204,22,0.5)] ${className}`}
  >
    {children}
  </button>
);

export default GlowingButton;