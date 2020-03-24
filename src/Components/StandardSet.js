import React, { Component } from 'react';

// Ethereum 
import { stableTokenData } from '../Ethereum/TokenData';

// Components
import TokenBox from './TokenBox';
import SliderBar from './SliderBar';
import PieChart from './PieChart';

import {
  Button,
  Heading,
  Box,
  Flex,
  Card
} from 'rebass'

import {
  Label,
  Input
} from '@rebass/forms'

export default class StandardSet extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      setDetails: [],
      sliderValues: [],
      sliderSum: 0,
      setName: '',
      setSymbol: '',
      setAddress: ''
    }
  }

  addToken = async (name, symbol, address, image) => {
    const { setDetails, sliderValues } = this.state;
    if(setDetails.findIndex(i => i.name === name) === -1) {
      const newSetDetails = [...setDetails];
      newSetDetails.push({name, symbol, address, image});

      const newSliderValues = [...sliderValues];
      newSliderValues.push(0)
      await this.setState({ setDetails: newSetDetails, sliderValues: newSliderValues });
    }
  }

  removeToken = async index => {
    const { setDetails, sliderValues } = this.state;

    const setDetailsCopy = [...setDetails];
    setDetailsCopy.splice(index, 1);

    const sliderValuesCopy = [...sliderValues];
    sliderValuesCopy.splice(index, 1);

    await this.setState({ 
      setDetails: setDetailsCopy, 
      sliderValues: sliderValuesCopy 
    });
    this.sumSliderValues();
  }

  updateSliderValues = sliderValues => this.setState({ sliderValues });

  sumSliderValues = () => {
    const sliderSum = this.state.sliderValues.reduce((a, b) => a + b, 0);
    this.setState({ sliderSum });
  }

  updateSliderAmount = setDetails => this.setState({ setDetails });

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

  percentCheck = (fx) => {
    const { sliderSum } = this.state;
    if(sliderSum === 100) {
      fx();
    }
    else {
      window.alert('Please make sure that you have allocated 100% of your tokens to the set.')
    }
  }

  tokenCheck = (fx) => {
    const { setDetails } = this.state;
    if(setDetails.length >= 1) {
      fx();
    }
    else {
      window.alert('Please select tokens you would like in your set.')
    }
  }

  render() {
    const { step, setDetails, setName, setSymbol, setAddress, sliderSum, sliderValues } = this.state;
    const values = { setDetails, setName, setSymbol, setAddress };

    switch(step) {
      case 1: 
      return (
        <div>
          <Heading>Select Tokens</Heading>
          <Flex sx={{justifyContent:' space-evenly', width: '1050px'}} p={5}>
            {stableTokenData.map((token, index) => 
            <TokenBox 
            key={`id-${index}`} 
            removeToken={this.removeToken} 
            addToken={this.addToken} 
            index={index} 
            token={token}
            setDetails={setDetails}
            />)}
          </Flex>
          <Button onClick={() => this.tokenCheck(this.nextStep)}>Next</Button>
        </div>
      )
      case 2:
        return (
          <div>
            <Heading>Choose Percents</Heading>
            <Heading>Total: {sliderSum}%</Heading>
            <Flex sx={{justifyContent:'space-evenly', margin: 3}}> 
                {setDetails.map((token, index) => 
                  <Box key={`id-${index}`} sx={{height: '250px', width: '250px'}}>
                    <SliderBar
                    key={`id-${index}`} 
                    sliderSum={sliderSum} 
                    removeToken={this.removeToken} 
                    sumSliderValues={this.sumSliderValues} 
                    updateSliderValues={this.updateSliderValues} 
                    sliderValues={sliderValues} 
                    index={index} 
                    token={token}
                    setDetails={setDetails}
                    updateSliderAmount={this.updateSliderAmount}
                    />
                  </Box>
                )}
            </Flex>
            <Flex sx={{justifyContent:'space-around', minWidth:'300px', margin: '30px', padding: [3,0,0,3]}}>
              <Button onClick={this.prevStep}>Previous</Button>
              <Button onClick={() => this.percentCheck(this.nextStep)}>Next</Button>
            </Flex>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>Enter Set Details</h1>
            <Box as='form' onSubmit={e => e.preventDefault()}>
              
              <Label>Token Name</Label>
              <Input type='text' value={setName} onChange={this.handleInputChange('setName')} required/>
              <Label>Token Symbol</Label>
              <Input type='text' value={setSymbol} onChange={this.handleInputChange('setSymbol')} required/>

              <Flex sx={{justifyContent:'space-around', minWidth:'300px', margin: '30px', padding: [3,0,0,3]}}>
              <Button onClick={this.prevStep}>Previous</Button>
              <Button onClick={this.nextStep}>Next</Button>
              </Flex>
            </Box>
          </div>
        )
      case 4:
        return (
        <Box>
            <Heading>Confirm Details</Heading>
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
              <Button onClick={this.prevStep}>Previous</Button>
          </Box>
        )
    }
  }
}

