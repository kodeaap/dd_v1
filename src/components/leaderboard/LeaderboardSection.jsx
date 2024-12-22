// src/components/leaderboard/LeaderboardSection.jsx
import React from 'react';
import LeaderboardCard from './LeaderboardCard';

const LeaderboardSection = ({ stories }) => (
  <div className="bg-black/80 rounded-xl p-6 border border-lime-300/20 backdrop-blur-sm sticky top-24">
    <h3 className="text-xl font-bold text-lime-300 mb-6">Top Degen Stories</h3>
    <div className="space-y-4">
      {stories.map((story, index) => (
        <LeaderboardCard 
          key={index}
          rank={index + 1}
          {...story}
        />
      ))}
    </div>
  </div>
);

export default LeaderboardSection;