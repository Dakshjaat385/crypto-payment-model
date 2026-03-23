import React, { useState } from 'react';
import { Wallet, ShieldCheck, Zap, X, Plus, LogOut, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Web3 VPN Services', amount: '10', token: 'USDC', nextBilling: 'In 5 days', status: 'Active' },
    { id: 2, name: 'AI Research Newsletter', amount: '15', token: 'USDC', nextBilling: 'In 12 days', status: 'Active' },
    { id: 3, name: 'Decentralized Hosting', amount: '25', token: 'USDC', nextBilling: 'In 20 days', status: 'Active' },
  ]);

  const handleConnectWallet = () => {
    setWalletConnected(true);
    setCurrentScreen('dashboard');
  };

  const handleDisconnect = () => {
    setWalletConnected(false);
    setCurrentScreen('landing');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <header className="flex justify-between items-center mb-10 border-b pb-4">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Zap className="h-6 w-6" /> SubSmart Protocol
          </h1>
          {walletConnected ? (
            <button onClick={handleDisconnect} className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500">
              <LogOut className="h-4 w-4" /> Disconnect 0x...4A2b
            </button>
          ) : null}
        </header>

        {currentScreen === 'landing' && (
          <div className="text-center py-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Seamless Web3 Subscriptions</h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Manage your recurring crypto payments without locking up your funds. Zero risk, pure control.</p>
            <button 
              onClick={handleConnectWallet}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2 mx-auto"
            >
              <Wallet className="h-5 w-5" /> Connect Wallet
            </button>
          </div>
        )}

        {currentScreen === 'dashboard' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Active Subscriptions</h2>
              <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
                <Plus className="h-4 w-4" /> New Subscription
              </button>
            </div>
            
            <div className="space-y-4">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{sub.name}</h3>
                      <p className="text-sm text-gray-500">Next billing: {sub.nextBilling}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{sub.amount} {sub.token}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
                      <CheckCircle2 className="h-3 w-3" /> {sub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
