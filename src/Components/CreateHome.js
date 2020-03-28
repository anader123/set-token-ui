import React from 'react';
import CardBox from './CardBox';
import { connect } from 'react-redux';

import WalletConnect from './WalletConnect';

import {
  Heading,
  Flex
} from 'rebass';

function Home(props) {
  const { walletConnected } = props;
  const cardData = [
    {
    heading: 'Standard Set',
    text: "Vanilla Set that simple a basket of assets.",
    path: "/create/standard-set"
    },
    {
      heading: 'Rebalancing Set',
      text: "A set of tokens that can periodically rebalanced.",
      path: '/create/rebalancing-set'
    }
  ];

  return (
    <div>
      {!walletConnected
      ?
      <WalletConnect />
      :
      <div>
        <Heading>Create a Set of your choosing.</Heading>
        <Flex sx={{justifyContent:'center'}} m={4}>
          {cardData.map((data, index) => <CardBox key={`id-${index}`} data={data}/>)}
        </Flex>
      </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Home);