import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SetUsername() {
  const { connected, setUserUsername } = useAuth();
  const [username, setUsername] = useState('');
  const router = useRouter();

  if (!connected) {
    router.push('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setUserUsername(username.trim());
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 handwritten text-center">
          Choose Your Username
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..."
            className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2
                     text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 rounded-lg
                     hover:bg-gray-100 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}