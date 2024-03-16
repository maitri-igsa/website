import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center" id="about" style={{scrollMarginTop: "132px"}}>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
        India is unique motley of various foods, festivals and languages. When someone nourished in such a wonderful land has to leave it suddenly, he/she is sure to feel the creation of a huge void in his life; a huge social void. Imagine living without the aromatic Indian food in all its colors and flavors, the fun-filled Indian festivals, the numerous Indian languages spoken by fellow Indians! Thats when Maitri comes in. We may not be able to give you all of this, but we help you adjust. Formally, Maitri is the Indian Graduate Student Association at North Carolina State University affiliated to the Office of International Services and Student Organization Resource Center.
        <br/> <br/>
        We are a volunteer-run student body whose goal is to make you feel at home. We organize events like Icebreaker (Freshers' Party), Aarambh, Diwali and Holi, bringing back a little spice of India to revive memories from back home. At least for a few hours we hope to reduce the stress of exams, mid-terms, assignments and projects. You definitely would love to be a part of various sports events and potluck parties we organize so as to get everyone together and know our fellow students better.
        <br/> <br/>
        Maitri being a student organization also aims at unifying various cultures at NC State. We do help and support Indian students at NC State, but we also create opportunities for them to immerse in the global culture, still retaining our rich Indian identity. We strive to extend our friendly hand to other organizations to enhance our network aiming for the welfare of the student community in general. We welcome each one of you on this vast land and invite you to live the Maitri experience.
        </Text>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us-bg.jpg"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
          // height="400px"
          borderBottomLeftRadius="10%"
          borderTopLeftRadius="10%"
        />
      </Box>
    </Grid>
  )
}

export default About
