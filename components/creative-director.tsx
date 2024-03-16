import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['32', '32', '32', '32', '64']}
      id="team"
      style={{scrollMarginTop: "132px"}}
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Core Team
      </Heading>
      <Text fontSize="20px" mb="32px" maxW={['90%', '70%']} textAlign="center">
        Meet the dedicated minds shaping Maitri's journey – where passion meets purpose, and community is our cornerstone.
      </Text>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/directors/placeholder.jpeg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Arjun Madhusudan
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              President
            </Text>
          </Flex>
        </Box>

        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['16', '16', '0', '0', '0']}
        >
          <Image src="/directors/placeholder.jpeg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
             Junaid Faruk
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              Vice President
            </Text>
          </Flex>
        </Box>

        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['12', '12', '0', '0', '0']}
        >
          <Image src="/directors/placeholder.jpeg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Barbara Jones
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              Director
            </Text>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  )
}

export default CreativeDirector
