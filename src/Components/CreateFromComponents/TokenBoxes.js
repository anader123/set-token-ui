import React from 'react';

// Components
import TokenBox from '../TokenBox';

// Ethereum 
import { stableTokenData } from '../../Ethereum/TokenData';

import {
  Button,
  Heading,
  Box,
  Flex,
  Card
} from 'rebass';

export default function TokenBoxes(props) {
  const {
    removeToken,
    addToken,
    setDetails,
    tokenCheck,
    nextStep
  } = props;
  return (
    <div>
      <Heading>Select Tokens</Heading>
      <Flex sx={{justifyContent:'center'}} p={5}>
        {stableTokenData.map((token, index) => 
        <TokenBox 
        key={`id-${index}`} 
        removeToken={removeToken} 
        addToken={addToken} 
        index={index} 
        token={token}
        setDetails={setDetails}
        />)}
      </Flex>
      <Button onClick={() => tokenCheck(nextStep)}>Next</Button>
    </div>
  )
}
