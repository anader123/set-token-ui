import React, { Component } from 'react';

// Ethereum 
import { stableTokenData } from '../Ethereum/TokenData';

// Components
import TokenBox from './TokenBox';

import {
  Button,
  Heading,
  Box
} from 'rebass'

import {
  Label,
  Input,
  Select,
  Textarea
} from '@rebass/forms'

export default class StandardSet extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      setDetails: [],
      setName: '',
      setSymbol: '',
      setAddress: ''
    }
  }

  addToken = async (name, symbol, address) => {
    const { setDetails } = this.state;
    const newSetDetails = [...setDetails];
    newSetDetails.push({name, symbol, address});
    await this.setState({ setDetails: newSetDetails });
  }

  nextStep = () => { 
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  prevStep = () => { 
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  handleInputChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step, setDetails, setName, setSymbol, setAddress } = this.state;
    const values = { setDetails, setName, setSymbol, setAddress };

    switch(step) {
      case 1: 
      return (
        <div className='tokenBox-container'>
          <Heading>Select Tokens</Heading>
          {stableTokenData.map((token, index) => <TokenBox key={`id-${index}`} addToken={this.addToken} token={token}/>)}
          <Button onClick={this.nextStep}>Next</Button>
        </div>
      )
      case 2:
        return (
          <div>
            <Heading>Choose Percent</Heading>
            <Button onClick={this.prevStep}>Previous</Button>
            <Button onClick={this.nextStep}>Next</Button>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>Enter Set Details</h1>
            <Box as='form' onSubmit={e => e.preventDefault()}>
              
              <Label>Token Name</Label>
              <Input onChange={this.handleInputChange('setName')}/>
              <Label>Token Symbol</Label>
              <Input onChange={this.handleInputChange('setSymbol')}/>

              <Button onClick={this.prevStep}>Previous</Button>
              <Button onClick={this.nextStep}>Next</Button>
            </Box>
          </div>
        )
      case 4:
        return (
          <div>
            <h1>Confirm Details</h1>
            <Button onClick={this.prevStep}>Previous</Button>
          </div>
        )
    }
  }
}

