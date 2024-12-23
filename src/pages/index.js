import { useAuth } from '../context/AuthContext';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { connected } = useAuth();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white handwritten">
            De-Gen Diaries
          </h1>
          <WalletMultiButton className="!bg-white !text-black hover:!bg-gray-100 !transition-all" />
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white handwritten">
            Share Your Story
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect your wallet to start sharing your wildest crypto stories and earn rewards
          </p>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white/60">
          <div>
            © 2024 De-Gen Diaries
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}