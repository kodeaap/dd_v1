import React from 'react';
import LeaderboardCard from './LeaderboardCard';

const LeaderboardSection = ({ stories }) => (
  <div className="bg-black/80 rounded-xl p-6 gen-border gen-backdrop sticky top-24">
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
      Top Degen Stories
    </h3>
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