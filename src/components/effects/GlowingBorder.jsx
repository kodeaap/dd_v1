// src/components/effects/GlowingBorder.jsx
import React from 'react';

const GlowingBorder = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-400 to-lime-300 opacity-25 blur-md" />
    <div className="relative border border-lime-300/20 rounded-xl overflow-hidden">
      {children}
    </div>
  </div>
);

export default GlowingBorder;