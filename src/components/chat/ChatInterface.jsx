import React from 'react';
import ChatMessage from './ChatMessage';

const ChatInterface = ({ 
  messages, 
  currentMessage, 
  setCurrentMessage, 
  activeTab,
  onSubmit 
}) => (
  <div className="bg-black/80 rounded-xl p-6 border border-lime-300/20 backdrop-blur-sm
                  min-h-[600px] flex flex-col">
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
          ? "Type your degen story here..." 
          : "Share your thoughts on this story..."
        }
        className="flex-1 bg-black/50 rounded-xl px-4 py-3 text-lime-300 outline-none 
                   border border-lime-300/20 focus:border-lime-300 placeholder-lime-300/50
                   font-mono transition-all duration-300 resize-none h-24 custom-scrollbar"
      />
      <button 
        onClick={() => onSubmit(currentMessage)}
        className="px-6 self-end py-3 rounded-xl font-medium bg-lime-300 text-black
                   hover:bg-lime-400 transition-all duration-300"
      >
        {activeTab === 'submit' ? 'Submit' : 'Vote'}
      </button>
    </div>
  </div>
);

export default ChatInterface;