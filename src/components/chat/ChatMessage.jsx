import React from 'react';

const ChatMessage = ({ message, isAI = false }) => (
  <div className="flex items-start gap-4">
    {isAI && (
      <div className="w-10 h-10 rounded-full bg-lime-300/20 border border-lime-300/40 
                    flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-lime-300 animate-pulse glow-lime" />
      </div>
    )}
    <div className={`flex-1 bg-black/40 rounded-2xl p-4 border border-lime-300/20
                    ${isAI ? '' : 'ml-14'}`}>
      <p className="text-lime-300 font-mono">
        {message}
        {isAI && <span className="animate-pulse">|</span>}
      </p>
    </div>
  </div>
);

export default ChatMessage;