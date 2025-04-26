import WalletConnect from '@/components/WalletConnect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
    <h1 className="text-4xl font-extrabold text-white mb-6">Connect Metamask Wallet</h1>
    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
      <WalletConnect />
    </div>
  </main>
  );
}
