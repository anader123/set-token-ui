import React from 'react';
import PieChart from '../PieChart';
import styled from 'styled-components';

import {
  Button,
  Heading,
  Flex,
  Card
} from 'rebass';

export default function ConfirmDetails(props) {
  const {
    setDetails,
    setName,
    setSymbol,
    prevStep
  } = props;

  const Box = styled.div`
    background-color: ${props => props.token.color};
    height: 20px;
    width: 20px;
    margin-right: 5px;
  `
  return (
    <div>
      <Heading>Confirm Details</Heading>
      <Flex justifyContent={'center'}>
      <Card 
      sx={{
        m: [3, 0, 0, 4],
        p: 1,
        transition: '300ms',
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        height: '450px',
        width: '375px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        }}
      >
        <Heading>Name: {setName}</Heading>
        <Heading>Symbol: {setSymbol}</Heading>
        <svg width='200' height='200'>
          <PieChart data={setDetails} x={100} y={100} />
        </svg>
        <Flex flexDirection={'column'} justifyContent={'flex-start'}>
          {setDetails.map((token, index) => {
            return(
              <Flex key={`id-${index}`} mt={1} alignItems={'flex-start'}>
                <Box token={token} />
                <div>{token.amount}% {token.symbol}</div>
              </Flex>
            )
          })}
        </Flex>
      </Card>
      </Flex>
        <Button onClick={prevStep}>Previous</Button>
    </div>
  )
}
