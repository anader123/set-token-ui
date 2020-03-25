import React from 'react';
import PieChart from '../PieChart';

import {
  Button,
  Heading,
  Box,
  Flex,
  Card
} from 'rebass'

export default function ConfirmDetails(props) {
  const {
    setDetails,
    setName,
    setSymbol,
    prevStep
  } = props;

  return (
    <div>
      <Heading>Confirm Details</Heading>
      <Flex justifyContent={'center'}>
      <Card 
      sx={{
        m: 3,
        p: 1,
        transition: '300ms',
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        height: '500px',
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        }}
      >
        <Heading>Name: {setName}</Heading>
        <Heading>Symbol: {setSymbol}</Heading>
        <div>Composition</div>
        {setDetails.map(token => <div>{token.amount}% {token.symbol}</div>)}
        <svg width='200' height='200'>
          <PieChart data={setDetails} x={100} y={100} />
        </svg>
      </Card>
      </Flex>
        <Button onClick={prevStep}>Previous</Button>
    </div>
  )
}
