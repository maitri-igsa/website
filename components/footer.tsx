import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import LogoFooter from './logo_footer'

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(5, 1fr)" mt="16" mb="16" id="contact">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <LogoFooter/>
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
        Step into the vibrant tapestry of Maitri, where the rich hues of Indian culture blend seamlessly with the diverse fabric of NC State. Join us on a journey filled with warmth, camaraderie, and endless opportunities for connection and growth.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          <a href="https://getinvolved.ncsu.edu/organization/maitri" target="_blank">
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://www.instagram.com/maitri.ncsu" target="_blank">
            <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://www.facebook.com/MaitriAtNcsu/" target='_blank'>
            <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://twitter.com/NCStateMaitri" target="_blank">
            <Box as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          </a>
         
          
          {/* <Box as={FaYoutube} size="22px" color="orange.500" /> */}
        </Flex>
      </Flex>

      {/* <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Projects
        </Text>
        <Text mb="6px">WHMCS-bridge</Text>
        <Text mb="6px">Search Domain</Text>
        <Text mb="6px">My Account</Text>
        <Text mb="6px">Shopping Cart</Text>
        <Text>Our Shop</Text>
      </Flex> */}

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: 109 Kathleen Ct, Morrisville, NC 27560, United States</Text>
        <Text mb="6px">Phone: +1 9194340801</Text>
        <Text>Email: maitri-igsa@ncsu.edu</Text>
      </Flex>

      {/* <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 6']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Newsletter
        </Text>
        <Text mb="6px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
      </Flex> */}
    </Grid>
  )
}

export default Footer
