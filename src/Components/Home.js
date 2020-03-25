import React, { Component } from 'react';
import CardBox from './CardBox';

import {
  Button,
  Heading,
  Box,
  Flex
} from 'rebass';

export default class Home extends Component {
  render() {
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
    ]
    return (
      <div>
        <Heading>Create a Set of your choosing.</Heading>
        <Flex sx={{justifyContent:'center'}} m={4}>
          {cardData.map((data, index) => <CardBox key={`id-${index}`} data={data}/>)}
        </Flex>
      </div>
    )
  }
}
