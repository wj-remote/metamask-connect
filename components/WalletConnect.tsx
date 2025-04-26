'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function WalletConnect() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask first!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      {walletConnected ? (
        <p>Wallet connected: {address}</p>
      ) : (
        <button onClick={connectWallet} className="bg-blue-600 text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
