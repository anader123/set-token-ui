import React, { Component } from 'react';

// Components
import TokenSlider from './CreateFromComponents/TokenSliders';
import TokenBoxs from './CreateFromComponents/TokenBoxes';
import SetDetailsForm from './CreateFromComponents/SetDetailsForm';
import ConfirmDetails from './CreateFromComponents/ConfirmDetails';

// Redux 
import { connect } from 'react-redux';

// Ethereum
import { exchangeTokenData } from '../Ethereum/TokenData';

import { Button } from 'rebass';

class StandardSet extends Component {
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

  addToken = async (token) => {
    const { setDetails, sliderValues } = this.state;
    if(setDetails.findIndex(i => i.name === token.name) === -1) {
      const newSetDetails = [...setDetails];
      token.amount = 0;
      newSetDetails.push(token);

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

  updateSetDetails = setDetails => this.setState({ setDetails });

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
    const { 
      step, 
      setDetails, 
      setName, 
      setSymbol, 
      sliderSum, 
      sliderValues 
    } = this.state;

    // const { userAddress } = this.props;

    switch(step) {
      case 1: 
      return (
        <TokenBoxs  
          setDetails={setDetails}
          removeToken={this.removeToken}
          addToken={this.addToken}
          tokenCheck={this.tokenCheck}
          nextStep={this.nextStep}
          tokens={exchangeTokenData}
        />
      )
      case 2:
        return (
          <TokenSlider
            sliderSum={sliderSum} 
            setDetails={setDetails}
            sliderValues={sliderValues} 
            removeToken={this.removeToken} 
            sumSliderValues={this.sumSliderValues} 
            updateSliderValues={this.updateSliderValues} 
            updateSetDetails={this.updateSetDetails}
            percentCheck={this.percentCheck}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        )
      case 3:
        return (
          <SetDetailsForm
            setName={setName}
            setSymbol={setSymbol}
            handleInputChange={this.handleInputChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        )
      case 4:
        return (
          <div>
            <ConfirmDetails 
              setDetails={setDetails}
              setName={setName}
              setSymbol={setSymbol}
              prevStep={this.prevStep}
            />
            <Button onClick={this.prevStep}>Previous</Button>
          </div>
        )
      default:
        return step;
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(StandardSet);