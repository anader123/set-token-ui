import React, {useEffect} from 'react';
import ReactLoading from 'react-loading';

import {
  Heading,
  Flex,
  Text
} from 'rebass';

export default function LoadingPage(props) {
  const { nextStep } = props;
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 25000); 
  }, [nextStep]); 

  return (
    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <Heading mt={'20px'}>Ethereum Magic in Progress</Heading>
      <Text mt={'5px'}>Your transaction is being added to the blockchain.</Text>
      <ReactLoading type={'bubbles'} color={'#583aff'} width={250} />
    </Flex>
  )
}