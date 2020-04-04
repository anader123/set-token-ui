import React from 'react';
import EthLogo from '../../Images/eth-icon.svg'

import {
  Heading,
  Flex,
  Image,
  Text,
  Link,
  Button
} from 'rebass';

export default function TransactionDetails(props) {
  const { setName, transactionHash, setAddress } = props;
  return (
    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <Heading m={2}>Congratulations</Heading>
      <Text>Your {setName} was sucessfully created at address:</Text>
      <Link 
        target="_blank" 
        rel="noopener noreferrer"
        href={`https://kovan.etherscan.io/address/${setAddress}`}>{setAddress}</
      Link>
      <Image m={3} height={'100px'} width={'90px'} src={EthLogo} />
      <Link 
        target="_blank" 
        rel="noopener noreferrer"
        href={`https://kovan.etherscan.io/tx/${transactionHash}`}>View Transaction Details</Link>
      <Link href={'/'}>
        <Button>Home</Button>
      </Link>
    </Flex>
  )
}
