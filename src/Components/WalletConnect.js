import React, { useState, useEffect } from 'react';
import { Button, Heading, Flex } from 'rebass';

// Redux
import { connect } from 'react-redux';
import {
  setUserAddress,
  toggleWalletConnected
} from '../Redux/actions';

function WalletConnect(props) {
  const { walletConnected, toggleWalletConnected, setUserAddress, nextStep } = props;

  useEffect(() => {
    if(window.ethereum.selectedAddress !== null) {
      setUserAddress(window.ethereum.selectedAddress);
      nextStep();
      toggleWalletConnected(true);
    }
  }, [walletConnected])

  const connectWallet = async () => {
    if(window.ethereum) {
      const accounts = await window.ethereum.enable();
      setUserAddress(accounts[0]);
      toggleWalletConnected(true);
      nextStep();
    }
    else {
      window.alert('No Ethereum wallet detected.');
    }
  }
  return (
    <div>
      <Heading mt={6}>Please connect your Ethereum wallet to create a Set.</Heading>
      <Button mt={4} onClick={connectWallet}>Connect Wallet</Button>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  setUserAddress, 
  toggleWalletConnected
})(WalletConnect);
