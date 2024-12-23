import React from 'react';

const LeaderboardCard = ({ rank, username, score, preview }) => (
  <div className="bg-black/40 rounded-xl p-4 gen-border transition-all group hover:bg-black/60">
    <div className="flex items-center gap-4 mb-3">
      <span className="text-2xl font-bold text-pink-500 group-hover:scale-110 transition-transform">
        {rank}
      </span>
      <div className="flex-1">
        <h4 className="text-pink-300 font-medium">{username}</h4>
        <p className="text-sm text-gray-400 truncate">{preview}</p>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-pink-500">{score}</span>
        <p className="text-xs text-gray-400">SCORE</p>
      </div>
    </div>
    <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
      <div 
        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full
                   transition-all duration-1000 ease-out"
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

export default LeaderboardCard;