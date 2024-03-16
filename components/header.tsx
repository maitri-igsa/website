import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'

const Header: React.FC = () => {
  return (
    <Grid
      backgroundImage="url(/home-bg-2.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['60vh', '60vh', '60vh', '70vh']}
      templateRows="1fr 1fr 1fr"
      id="home"
    >
      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading
          as="h3"
          fontSize="4xl"
          color="white"
          bg="orange.500"
          mb="3"
          width="fit-content"
          paddingX={['4px', '12px', '12px', '16px', '24px']}
          paddingY={['4px', '4px', '12px', '12px', '16px']}
          borderRadius="24px"
        >
          MAITRI
        </Heading>
        <Heading
          as="h4"
          fontSize="xl"
          textTransform="uppercase"
          color="orange.500"
          bg="white"
          width="fit-content"
          paddingX={['24px', '24px', '30px', '30px', '30px']}
          paddingY={['8px', '8px', '14px', '14px', '14px']}
          borderRadius="24px"
        >
          Cultural Connection
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Header
