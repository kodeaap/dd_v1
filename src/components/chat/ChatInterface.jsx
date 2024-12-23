import React from 'react';
import ChatMessage from './ChatMessage';

const ChatInterface = ({ 
  messages, 
  currentMessage, 
  setCurrentMessage, 
  activeTab,
  onSubmit 
}) => (
  <div className="space-y-6">
    {/* GEN Image */}
    <div className="relative w-64 h-64 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full overflow-hidden gen-border">
        <img 
          src="/GEN.png" 
          alt="GEN AI Assistant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-black/80 px-4 py-2 rounded-full gen-border">
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-pink-500 text-sm font-medium">GEN is listening...</span>
        </div>
      </div>
    </div>

    {/* Chat Interface */}
    <div className="bg-black/80 rounded-xl p-6 gen-border gen-backdrop min-h-[600px] flex flex-col">
      <div className="flex-1 space-y-4 mb-4 overflow-y-auto custom-scrollbar">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>

      <div className="flex gap-2">
        <textarea 
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder={activeTab === 'submit' 
            ? "Share your degen story..." 
            : "What do you think about this story?"}
          className="flex-1 bg-black/50 rounded-xl px-4 py-3 text-pink-300 outline-none 
                     gen-border focus:border-pink-500 placeholder-pink-300/50
                     font-mono transition-all duration-300 resize-none h-24 custom-scrollbar"
        />
        <button 
          onClick={() => onSubmit(currentMessage)}
          className="px-6 self-end py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-pink-600
                     text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300
                     shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
        >
          {activeTab === 'submit' ? 'Submit' : 'Vote'}
        </button>
      </div>
    </div>
  </div>
);

export default ChatInterface;
