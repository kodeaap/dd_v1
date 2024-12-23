import React from 'react';

const ChatMessage = ({ message, isAI = false }) => (
  <div className="flex items-start gap-4">
    {isAI && (
      <div className="w-10 h-10 rounded-full bg-purple-600/20 gen-border
                    flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-pink-500 animate-pulse glow-neon" />
      </div>
    )}
    <div className={`flex-1 bg-black/40 rounded-2xl p-4 gen-border
                    ${isAI ? '' : 'ml-14'}`}>
      <p className="text-pink-300 font-mono">
        {message}
        {isAI && <span className="animate-pulse">|</span>}
      </p>
    </div>
  </div>
);

export default ChatMessage;