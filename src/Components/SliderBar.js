import React, { useState } from 'react';

import {
	Image,
	Box,
	Heading,
	Text
} from 'rebass'

export default function SliderBar(props) {
	const { 
		token, 
		index, 
		sliderValues, 
		sumSliderValues, 
		updateSliderValues,
		removeToken
	} = props;
	const [value, setValue] = useState(sliderValues[index]);

	const handleChange = async (event) => {
		const sliderValuesCopy = [...sliderValues];
		sliderValuesCopy[index] = +event.target.value;
		const valuesSum = sliderValuesCopy.reduce((a, b) => a + b, 0);
		if(valuesSum <= 100 ){
			setValue(event.target.value);
			await updateSliderValues(sliderValuesCopy);
			sumSliderValues();
		}
	}
  return (
    <Box>
			<Image width={60} height={60} src={token.image}></Image>
			<Heading>{token.symbol}</Heading>
      <input
				type='range'
				min={0}
				max={100}
				step={5}
				value={value}
				onChange={handleChange}
				required
			/>
			<Text>{value}%</Text>
			<p onClick={() => removeToken(index)}>x</p>
    </Box>
  )
}
