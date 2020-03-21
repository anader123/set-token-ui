import React, { Component } from 'react';

// Ethereum 
import { stableTokenData } from '../Ethereum/TokenData';

// Components
import TokenBox from './TokenBox';

// Images


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
    console.log(setDetails)
  }

  // Proceed to next step 
  nextStep = () => { 
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Proceed to go back a step 
  prevStep = () => { 
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  handleInputChange = (input, e) => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step, setDetails, setName, setSymbol, setAddress } = this.state;
    const values = { setDetails, setName, setSymbol, setAddress };

    switch(step) {
      case 1: 
      return (
        <div className='tokenBox-container'>
          {stableTokenData.map((token, index) => <TokenBox key={`id-${index}`} addToken={this.addToken} token={token}/>)}
          <button onClick={this.nextStep}>Next</button>
        </div>
      )
      case 2:
        return (
          <div>
            <h2>Sliders</h2>
            <button onClick={this.nextStep}>Next</button>
          </div>
        )
      case 3:
        return <h1>Enter Details</h1>
      case 4:
        return <h1>Confirm page</h1>
      case 5:
        return <h1>Success</h1>
    }
    return (
      <div>
        <h3>Creating a Standard Set</h3>
        
      </div>
    )
  }
}

