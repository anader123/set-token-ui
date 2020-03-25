import React from 'react';

import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button,
  Link
} from 'rebass'

export default function CardBox(props) {
  const { data } = props;
  return (
    <div>
      <Box m={4} width={256}>
      <Link href={data.path}>
        <Card
          onClick={() => {
              console.log('hit') 
          }}
          sx={{
              ':hover': {
                  backgroundColor: '#F4F4FA',
                  transition: '200ms',
                  transform: 'scale(1.08)',
                  width: 'auto'
                  },
              p: 1,
              transition: '300ms',
              borderRadius: 2,
              boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              height: '175px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              cursor: 'pointer'
              }}>
            {/* <Image src={token.image} /> */}
          <Box px={2}>
            <Heading as='h5'>
                {data.heading}
            </Heading>
            <Text fontSize={0}>
                {data.text}
            </Text>
          </Box>
        </Card>
      </Link>
      </Box>
    </div>
  )
}
