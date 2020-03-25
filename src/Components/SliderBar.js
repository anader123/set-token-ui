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
		const sliderValuesCopy = [...sliderValues];
    sliderValuesCopy[index] = +event.target.value;
    
    const valuesSum = sliderValuesCopy.reduce((a, b) => a + b, 0);
    
		if(valuesSum <= 100 ){
      const setDetailsCopy = [...setDetails];
      setDetailsCopy[index].amount = +event.target.value;
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
      p: '10px',
      borderRadius: 2,
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      height: '165px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '256px'
    }}>

        <Box
        sx={{
          m: 3,
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
              sx={{
                '-webkit-appearance': 'none',
                'appearance': 'none',
                'width': '15%',
                'height': '8px',
                'background': '#b9b9b9',
                'outline': 'none',
                'opacity': '0.7',
                '-webkit-transition': '.2s',
                'transition': 'opacity .2s',
                'border-radius': '3px'
              }}
            />
          <Text>{value}%</Text>
        </Box>
  			<Button sx={{mt: 0, p: 2, fontSize: 1}} onClick={() => removeToken(index)}>Remove</Button>
		</Card>
    </Box>
  )
}
