import React from 'react'
import SliderBar from '../SliderBar';

import {
  Button,
  Heading,
  Box,
  Flex
} from 'rebass'

export default function TokenSelect(props) {
    const {
      sliderSum,
      removeToken, 
      sumSliderValues, 
      updateSliderValues, 
      sliderValues, 
      setDetails,
      updateSliderAmount,
      percentCheck,
      nextStep,
      prevStep
    } = props;
    
  return (
    <div>
      <Heading>Choose Percents</Heading>
      <Heading>Total: {sliderSum}%</Heading>
      <Flex sx={{justifyContent:'center', margin: 3}}> 
          {setDetails.map((token, index) => 
            <Box key={`id-${index}`} sx={{height: '250px', width: '250px'}}>
              <SliderBar
              key={`id-${index}`} 
              sliderSum={sliderSum} 
              removeToken={removeToken} 
              sumSliderValues={sumSliderValues} 
              updateSliderValues={updateSliderValues} 
              sliderValues={sliderValues} 
              index={index} 
              token={token}
              setDetails={setDetails}
              updateSliderAmount={updateSliderAmount}
              />
            </Box>
          )}
      </Flex>
      <Flex sx={{justifyContent:'center', minWidth:'300px', margin: '30px', padding: [3,0,0,3]}}>
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={() => percentCheck(nextStep)}>Next</Button>
      </Flex>
    </div>
  )
}
