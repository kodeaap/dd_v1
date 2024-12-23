import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { username } = useAuth();

  return (
    <header className="border-b border-white/10 fixed top-0 left-0 right-0 bg-black/95 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white handwritten">
          De-Gen Diaries
        </h1>
        <div className="flex items-center space-x-4">
          {username && (
            <span className="text-white/60 handwritten">
              @{username}
            </span>
          )}
          <WalletMultiButton className="!bg-white !text-black hover:!bg-gray-100 !transition-all" />
        </div>
      </nav>
    </header>
  );
};

export default Header;