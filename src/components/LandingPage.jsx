import React, { useState, useEffect } from 'react';

// Keep the expanded DEGEN_WORDS list from the first version
const DEGEN_WORDS = [
  "WAGMI", "NGMI", "WEN", "TO THE MOON", "FAM", "HYDRATE", "SIT UP STRAIGHT", "TICKER", "GOD CANDLE", "MILLIONAIRE",
  "MEMES", "ALTCOINS", "AI", "ETF", "SOLANA", "RUGGED", "NFT", "DEFI", "STAKING", "AIRDROP",
  "FDV", "MARKETCAP", "BAG", "ARMY", "TRENCHES", "ALPHA", "ELON", "DOGE", "PEPE", "INSCRIPTION", "PUNKS",
  "APE", "100X", "LAMBO", "COOK", "CTO", "DEV", "DEGEN", "ALLOWLIST", "DISCORD", "TELEGRAM",
  "TWITTER", "TIKTOK", "FUTURES", "LEVERAGE", "PUMPFUN", "DEX", "SLIPPAGE", "PROFIT", "LOSS", "RUNES",
  "ORDINALS", "GAS", "MEV", "HODL", "FOMO", "FUD", "DYOR", "REKT", "PND", "SAFU", "INFLUENCER",
  "GM", "OG", "CT", "JEET", "BTD", "WL", "BAGHOLDER", "APE IN", "SHILL", "CONTRACT", "ERC721"
];

// Component Imports
const DegenWordsBackground = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getRandomWord = () => DEGEN_WORDS[Math.floor(Math.random() * DEGEN_WORDS.length)];
    
    const generateCharacter = () => ({
      value: getRandomWord(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2,
      rotation: Math.random() * 40 - 20
    });

    const newCharacters = Array(50).fill(null).map(generateCharacter);
    setCharacters(newCharacters);

    const interval = setInterval(() => {
      setCharacters(prev => prev.map(char => ({
        ...char,
        opacity: Math.random() * 0.6 + 0.2
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {characters.map((char, index) => (
        <div
          key={index}
          className="absolute text-lime-300/30 transition-opacity duration-1000"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            opacity: char.opacity,
            transform: `rotate(${char.rotation}deg)`,
            fontSize: '0.75rem'
          }}
        >
          {char.value}
        </div>
      ))}
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
      active 
        ? 'bg-lime-300 text-black hover:bg-lime-400' 
        : 'bg-black/40 text-lime-300 border border-lime-300/20 hover:border-lime-300/40'
    }`}
  >
    {children}
  </button>
);

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

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [message, setMessage] = useState('');
  const [displayText, setDisplayText] = useState('');
  const fullText = activeTab === 'submit' 
    ? "Share your wildest degen story..." 
    : "Want to hear a story and rate it?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeTab, fullText]);

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-black">
      <DegenWordsBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-lime-300/20 backdrop-blur-sm bg-black/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl tracking-wider text-lime-300 animate-pulse">
            De-Gen Diaries
          </h1>
          <button className="bg-lime-300 text-black px-6 py-2 rounded-full text-sm font-medium 
                           hover:bg-lime-400 transition-all duration-300 transform hover:scale-105">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mode Selection */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <TabButton active={activeTab === 'submit'} onClick={() => setActiveTab('submit')}>
                  RANK MY STORY
                </TabButton>
                <TabButton active={activeTab === 'vote'} onClick={() => setActiveTab('vote')}>
                  READ & VOTE
                </TabButton>
              </div>

              {/* Chat Interface */}
              <div className="bg-black/80 rounded-xl p-6 border border-lime-300/20 backdrop-blur-sm
                            min-h-[600px] flex flex-col">
                {/* Chat History */}
                <div className="flex-1 space-y-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lime-300/20 border border-lime-300/40 
                                  flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-lime-300 animate-pulse glow-lime" />
                    </div>
                    <div className="flex-1 bg-black/40 rounded-2xl p-4 border border-lime-300/20">
                      <p className="text-lime-300 font-mono">
                        {displayText}
                        <span className="animate-pulse">|</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={activeTab === 'submit' ? "Type your degen story here..." : "Share your thoughts on this story..."}
                    className="flex-1 bg-black/50 rounded-xl px-4 py-3 text-lime-300 outline-none 
                             border border-lime-300/20 focus:border-lime-300 placeholder-lime-300/50
                             font-mono transition-all duration-300 resize-none h-24"
                  />
                  <button className="px-6 self-end py-3 rounded-xl font-medium bg-lime-300 text-black
                                   hover:bg-lime-400 transition-all duration-300">
                    {activeTab === 'submit' ? 'Submit' : 'Vote'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Leaderboard */}
            <div className="lg:col-span-1">
              <div className="bg-black/80 rounded-xl p-6 border border-lime-300/20 backdrop-blur-sm sticky top-24">
                <h3 className="text-xl font-bold text-lime-300 mb-6">Top Degen Stories</h3>
                <div className="space-y-4">
                  <LeaderboardCard 
                    rank="1"
                    username="DegenKing"
                    score={98}
                    preview="Lost 100k on a jpeg, made it back on..."
                  />
                  <LeaderboardCard 
                    rank="2"
                    username="SolanaWhale"
                    score={92}
                    preview="Aped into a random coin because..."
                  />
                  <LeaderboardCard 
                    rank="3"
                    username="MoonBoy"
                    score={87}
                    preview="Traded my house for NFTs and..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-lime-300/20 backdrop-blur-sm bg-black/60">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Twitter</a>
              <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Discord</a>
              <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Blog</a>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-lime-300/60 hover:text-lime-300 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .glow-lime {
          box-shadow: 0 0 20px 5px rgba(132, 204, 22, 0.5);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;