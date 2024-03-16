import React from 'react'

import { Heading, Text, Image, Box } from '@chakra-ui/core'
// import MaitriLogo from './Maitri-Logo.png';

const LogoFooter: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="lg" color="orange.500" textTransform="uppercase">
          <Image src={'./Maitri-Logo-without.png'} alt="Maitri Logo" mr="1" width={'150px'} />
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

export default LogoFooter
