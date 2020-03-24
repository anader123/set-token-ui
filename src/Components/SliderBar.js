import React, { useState, useEffect } from 'react';

import {
	Image,
	Box,
	Heading,
	Text,
	Button,
	Card
} from 'rebass';

import { Label, Slider } from '@rebass/forms'

export default function SliderBar(props) {
	const { 
		token, 
		index, 
		sliderValues, 
		sumSliderValues, 
		updateSliderValues,
    removeToken,
    setDetails,
    updateSliderAmount
	} = props;
	const [value, setValue] = useState(sliderValues[index]);

	const handleChange = async event => {
    const setDetailsCopy = [...setDetails];
    setDetailsCopy[index].amount = +event.target.value;

		const sliderValuesCopy = [...sliderValues];
    sliderValuesCopy[index] = +event.target.value;
    
    const valuesSum = sliderValuesCopy.reduce((a, b) => a + b, 0);
		if(valuesSum <= 100 ){
      updateSliderAmount(setDetailsCopy);

			setValue(+event.target.value);
			await updateSliderValues(sliderValuesCopy);
			sumSliderValues();
		}
	}
  return (
	<Box 
	width={256}
	>
		<Card sx={{
			m: [15,0,0,15],
      p: 10,
      borderRadius: 2,
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      height: '165px',
      display: 'flex',
      // justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'column',
      height: '256px'
              }}>

        <Box
        sx={{
          // m: [15,0,0,15],
          p: 10,
          height: '170px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <Image width={60} height={60} src={token.image}></Image>
          <Heading>{token.symbol}</Heading>
            <Slider
              type='range'
              min={0}
              max={100}
              step={5}
              value={value}
              onChange={handleChange}
              required
              width='95%'
            />
          <Text>{value}%</Text>
        </Box>
  			<Text sx={{cursor:'pointer'}} onClick={() => removeToken(index)}>Remove Token</Text>
		</Card>
    </Box>
  )
}
