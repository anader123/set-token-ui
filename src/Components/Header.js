import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ethIcon from '../Images/eth-icon.svg'

// Redux
import { connect } from 'react-redux';
import {
  setUserAddress,
  toggleWalletConnected
} from '../Redux/actions';

import {
  Flex,
  Text,
  Box,
  Image,
  Link
} from 'rebass';

function Header(props) {
  const { 
    userAddress, 
    walletConnected, 
    toggleWalletConnected, 
    setUserAddress 
  } = props;

  const [ shortUserAddress, setShortUserAddress ] = useState('');
  useEffect(() => {
    if(window.ethereum.selectedAddress !== null) {
      setUserAddress(window.ethereum.selectedAddress);
      toggleWalletConnected(true);
      // Format Display Address
      const shortAddress = `${userAddress.slice(0, 7)}...${userAddress.slice(35, 42)}`;
      setShortUserAddress(shortAddress);
    }
  }, [setUserAddress, toggleWalletConnected, userAddress]);

  return (
    <Flex
      px={2}
      color='black'
      bg='white'
      alignItems='center'>
        <Image 
          ml={4}
          src={ethIcon}
          height='40px'
        />
        <Bar />
        <Text p={4} pl={0} fontSize={[ 2, 4 ]}>
        <Link href={'/'}>
        Set Factory
        </Link>
        </Text>
      <Box mx='auto' />
      <div>
      {!walletConnected 
      ?
      <div/>
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
    </Flex>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  setUserAddress, 
  toggleWalletConnected
})(Header);

const Bar = styled.div`
	margin: 0px 12px;
	border-left: 1px solid black;
	height: 42px;
`;
