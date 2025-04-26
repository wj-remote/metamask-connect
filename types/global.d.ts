interface EthereumProvider {
    isMetaMask?: boolean;
    request: (...args: any[]) => Promise<any>;
  }
  
  interface Window {
    ethereum?: EthereumProvider;
  }
  