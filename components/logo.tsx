import React from 'react'

import { Heading, Text, Image, Box } from '@chakra-ui/core'
// import MaitriLogo from './Maitri-Logo.png';

const Logo: React.FC = ({content}) => {
  return (
    <>
      <Heading as="h1" size="lg" color="orange.500" textTransform="uppercase">
          <Image src={content?'./Maitri-Logo-without.png':'./Maitri-Logo.png'} alt="Maitri Logo" mr="1" width={'150px'} />
        {/* <Text display="inline" fontWeight="extrabold">
          Interior
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Design
        </Text> */}
      </Heading>
    </>
  )
}

export default Logo
