import React from 'react';

const ChatMessage = ({ message, isAI, username }) => (
  <div className="flex items-start gap-4">
    {isAI ? (
      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20
                    flex items-center justify-center">
        <span className="text-lg font-bold handwritten">G</span>
      </div>
    ) : null}
    <div className={`flex-1 bg-white/5 rounded-2xl p-4 border border-white/10
                    ${isAI ? '' : 'ml-14'}`}>
      <p className="text-white font-mono">
        {message}
      </p>
      {!isAI && (
        <p className="text-white/40 text-sm mt-2 handwritten">
          - {username}
        </p>
      )}
    </div>
  </div>
);

export default ChatMessage;