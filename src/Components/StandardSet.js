import React, { Component } from 'react';

// Components
import TokenSlider from './CreateFromComponents/TokenSliders';
import TokenBoxs from './CreateFromComponents/TokenBoxes';
import SetDetailsForm from './CreateFromComponents/SetDetailsFrom';
import ConfirmDetails from './CreateFromComponents/ConfirmDetails';

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
    const { 
      step, 
      setDetails, 
      setName, 
      setSymbol, 
      setAddress, 
      sliderSum, 
      sliderValues 
    } = this.state;

    switch(step) {
      case 1: 
      return (
        <TokenBoxs  
          setDetails={setDetails}
          removeToken={this.removeToken}
          addToken={this.addToken}
          tokenCheck={this.tokenCheck}
          nextStep={this.nextStep}
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
            updateSliderAmount={this.updateSliderAmount}
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
          <ConfirmDetails 
            setDetails={setDetails}
            setName={setName}
            setSymbol={setSymbol}
            prevStep={this.prevStep}
          />
        )
    }
  }
}

