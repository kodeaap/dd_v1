import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ChatMessage from './ChatMessage';

const ChatInterface = ({ messages, onSubmit, mode }) => {
  const { username } = useAuth();
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSubmit = () => {
    if (!currentMessage.trim()) return;
    onSubmit(currentMessage);
    setCurrentMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 min-h-[600px] flex flex-col">
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto custom-scrollbar">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} username={username} />
          ))}
        </div>

        <div className="flex gap-2">
          <textarea 
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder={mode === 'submit' 
              ? "Type your wildest story..." 
              : "Share your thoughts on this story..."
            }
            className="flex-1 bg-black/50 rounded-xl px-4 py-3 text-white outline-none 
                     border border-white/20 focus:border-white/40
                     font-mono transition-all duration-300 resize-none h-24
                     placeholder-white/50"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button 
            onClick={handleSubmit}
            className="px-6 self-end py-3 rounded-xl font-bold bg-white text-black
                     hover:bg-gray-100 transition-all duration-300 handwritten"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;