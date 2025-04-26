import WalletConnect from '@/components/WalletConnect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Connect Metamask Wallet</h1>
      <WalletConnect />
    </main>
  );
}
