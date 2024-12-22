// src/components/leaderboard/LeaderboardCard.jsx
import React from 'react';

const LeaderboardCard = ({ rank, username, score, preview }) => (
  <div className="bg-black/40 rounded-xl p-4 border border-lime-300/20 hover:border-lime-300/40 transition-all">
    <div className="flex items-center gap-4 mb-3">
      <span className="text-2xl font-bold text-lime-300">{rank}</span>
      <div className="flex-1">
        <h4 className="text-lime-300 font-medium">{username}</h4>
        <p className="text-sm text-gray-400 truncate">{preview}</p>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-lime-300">{score}</span>
        <p className="text-xs text-gray-400">SCORE</p>
      </div>
    </div>
    <div className="w-full bg-black/50 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-lime-400 to-lime-300 h-2 rounded-full"
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

export default LeaderboardCard;