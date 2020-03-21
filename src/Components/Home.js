import React, { Component } from 'react'
import CardBox from './CardBox'

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
        <h2>Create a Set of your choosing.</h2>
        {cardData.map((data, index) => <CardBox key={`id-${index}`} data={data}/>)}
      </div>
    )
  }
}
