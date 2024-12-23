import { createContext, useContext, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { connected, publicKey } = useWallet();
  const [username, setUsername] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        router.push('/set-username');
      }
    } else {
      setUsername(null);
      if (router.pathname !== '/') {
        router.push('/');
      }
    }
  }, [connected, router]);

  const setUserUsername = (name) => {
    localStorage.setItem('username', name);
    setUsername(name);
    router.push('/chat');
  };

  return (
    <AuthContext.Provider value={{ connected, publicKey, username, setUserUsername }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}