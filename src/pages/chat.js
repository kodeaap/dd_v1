import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatInterface from '../components/chat/ChatInterface';

export default function Chat() {
  const { connected, username } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!connected || !username) {
      router.push('/');
    }
  }, [connected, username, router]);

  if (!connected || !username) return null;

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setMessages([{
      message: selectedMode === 'submit'
        ? `Alright ${username}, let's hear your wildest story...`
        : `Hey ${username}, want to hear a crazy story from the vault?`,
      isAI: true
    }]);
  };

  const handleSubmit = (message) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, {
      message,
      isAI: false
    }]);

    // Simulate AI response
    setTimeout(() => {
      if (mode === 'submit') {
        const score = Math.floor(Math.random() * 31) + 70; // 70-100 range
        setMessages(prev => [...prev, {
          message: `Holy shit ${username}! That's insane... I'm giving this a ${score}/100 on the degen scale! Your story has been added to the vault. 🔥`,
          isAI: true
        }]);
      } else {
        setMessages(prev => [...prev, {
          message: "Thanks for your vote! Your participation has been recorded and tokens will be distributed based on consensus.",
          isAI: true
        }]);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {!mode ? (
            <div className="space-y-8 text-center py-12">
              <h2 className="text-4xl font-bold handwritten">
                What's the move, {username}?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleModeSelect('submit')}
                  className="bg-white text-black px-8 py-4 rounded-xl text-xl
                           font-bold hover:bg-gray-100 transition-all duration-300 handwritten"
                >
                  Submit My Story
                </button>
                <button
                  onClick={() => handleModeSelect('read')}
                  className="bg-white/10 text-white px-8 py-4 rounded-xl text-xl
                           font-bold hover:bg-white/20 transition-all duration-300 handwritten
                           border border-white/20"
                >
                  Read & Vote
                </button>
              </div>
            </div>
          ) : (
            <ChatInterface
              messages={messages}
              onSubmit={handleSubmit}
              mode={mode}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}