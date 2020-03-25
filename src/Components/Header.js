import React from 'react';
import styled from 'styled-components';
import ethIcon from '../Images/eth-icon.svg'

import {
  Flex,
  Text,
  Box,
  Image,
  Link
} from 'rebass';

export default function Header() {
    return (
      <Link href={'/'}>
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
          Set Factory
          </Text>
          <Box mx='auto' />
          {/* <WalletConnect /> */}
        </Flex>
      </Link>
    )
}

const Bar = styled.div`
	margin: 0px 12px;
	border-left: 1px solid black;
	height: 42px;
`;
