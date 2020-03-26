import React, { useState } from 'react';
import CardBox from './CardBox';
import { connect } from 'react-redux';

import {
  Heading,
  Flex
} from 'rebass';

function Home(props) {
  const { walletConnected } = props;
  const [toggleSets, setToggleSets] = useState(false);
  const cardData = [
    {
    heading: 'Standard Set',
    text: "Vanilla Set that simple a basket of assets.",
    path: "/create-standard-set"
    },
    {
      heading: 'Rebalancing Set',
      text: "A set of tokens that can periodically rebalanced.",
      path: './create-rebalancing-set'
    }
  ];

  return (
    <div>
      <Heading>Create a Set of your choosing.</Heading>
      <Flex sx={{justifyContent:'center'}} m={4}>
        {cardData.map((data, index) => <CardBox key={`id-${index}`} data={data}/>)}
      </Flex>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Home);