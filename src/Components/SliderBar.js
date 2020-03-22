import React, { useState } from 'react';

import {
	Image,
	Box,
	Heading
} from 'rebass'

export default function SliderBar(props) {
	const { token } = props;
  const [value, setValue] = useState(0);
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
				onChange={event => setValue(event.target.value)}
				required
			/>
			<div>{value}%</div>
    </Box>
  )
}
