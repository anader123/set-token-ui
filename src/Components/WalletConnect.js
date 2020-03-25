import React, { useState } from 'react';
import { Button, Link, Text } from 'rebass';

export default function WalletConnect() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [shortUserAddress, setShortUserAddress] = useState('')

  const connectWallet = async () => {
    if(window.ethereum) {
      const accounts = await window.ethereum.enable();
      setUserAddress(accounts[0]);
      const shortAddress = `${accounts[0].slice(0, 7)}...${accounts[0].slice(35, 42)}`;
      setShortUserAddress(shortAddress);
      setWalletConnected(true);
    }
    else {
      window.alert('No Ethereum wallet detected.');
    }
  }
  return (
    <div>
      {!walletConnected 
      ?
      <Button mr={[1, 5]} onClick={connectWallet}>Connect Wallet</Button>
      :
      <Link 
        target="_blank" 
        rel="noopener noreferrer"
        href={`https://etherscan.io/address/${userAddress}`}
      >
        <Text mr={[1, 4]}>Address: {shortUserAddress}</Text>
      </Link>
      }
    </div>
  )
}
