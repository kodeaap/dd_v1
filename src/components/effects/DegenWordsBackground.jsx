import React, { useState, useEffect } from 'react';

const DEGEN_WORDS = [
  "WAGMI", "NGMI", "WEN", "TO THE MOON", "FAM", "HYDRATE", "SIT UP STRAIGHT", "TICKER", 
  "GOD CANDLE", "MILLIONAIRE", "MEMES", "ALTCOINS", "AI", "ETF", "SOLANA", "RUGGED", 
  "NFT", "DEFI", "STAKING", "AIRDROP", "FDV", "MARKETCAP", "BAG", "ARMY", "TRENCHES", 
  "ALPHA", "ELON", "DOGE", "PEPE", "INSCRIPTION", "PUNKS", "APE", "100X", "LAMBO"
];

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

export default DegenWordsBackground;