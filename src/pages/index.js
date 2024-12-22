import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TabButton from '../components/shared/TabButton';
import ChatInterface from '../components/chat/ChatInterface';
import LeaderboardSection from '../components/leaderboard/LeaderboardSection';
import DegenWordsBackground from '../components/effects/DegenWordsBackground';

const MOCK_STORIES = [
  {
    username: "DegenKing",
    score: 98,
    preview: "Lost 100k on a jpeg, made it back on..."
  },
  {
    username: "SolanaWhale",
    score: 92,
    preview: "Aped into a random coin because..."
  },
  {
    username: "MoonBoy",
    score: 87,
    preview: "Traded my house for NFTs and..."
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('submit');
  const [messages, setMessages] = useState([{
    message: activeTab === 'submit' 
      ? "Share your wildest degen story..." 
      : "Want to hear a story and rate it?",
    isAI: true
  }]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    setMessages([{
      message: activeTab === 'submit' 
        ? "Share your wildest degen story..." 
        : "Want to hear a story and rate it?",
      isAI: true
    }]);
  }, [activeTab]);

  const handleSubmit = (message) => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, {
      message: message,
      isAI: false
    }]);
    setCurrentMessage('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        message: activeTab === 'submit'
          ? "Thanks for sharing! Your degen score is calculating..."
          : "Thanks for voting! Your participation has been recorded.",
        isAI: true
      }]);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-black">
      <DegenWordsBackground />

      <Header />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-4 justify-center lg:justify-start">
                <TabButton 
                  active={activeTab === 'submit'} 
                  onClick={() => setActiveTab('submit')}
                >
                  RANK MY STORY
                </TabButton>
                <TabButton 
                  active={activeTab === 'vote'} 
                  onClick={() => setActiveTab('vote')}
                >
                  READ & VOTE
                </TabButton>
              </div>

              <ChatInterface 
                messages={messages}
                currentMessage={currentMessage}
                setCurrentMessage={setCurrentMessage}
                activeTab={activeTab}
                onSubmit={handleSubmit}
              />
            </div>

            <div className="lg:col-span-1">
              <LeaderboardSection stories={MOCK_STORIES} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
