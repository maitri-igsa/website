import React from 'react'

import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core'

const OurProject: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="32" id="events" style={{scrollMarginTop: "132px"}}>
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Events
      </Heading>
      <Text fontSize="20px" mb="32px" maxW={['90%', '70%']} textAlign="center">
      Bringing the vibrant spirit of India to North Carolina State University, Maitri fosters a sense of home and community for all.
      </Text>
      <Grid
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr', '1fr 1fr']}
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <div className="image-container" onClick={()=>{
          window.open('https://photos.app.goo.gl/MHHKmf9URS1U6SjFA', '_blank')
        }}>
          <Image
            src="/grid/Diwali_2023.jpg"
            gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            Diwali 2023
          </Text>
        </div>
        <div className="image-container" onClick={()=>{
          window.open('https://photos.app.goo.gl/F5JXSEs7DYAsqWW98', '_blank')
        }}>
          <Image
            src="/grid/Arambh_2023.jpg"
            gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            Aarambh 2023
          </Text>
        </div>
        <div className="image-container" onClick={()=>{
          window.open('https://photos.app.goo.gl/P3JCxFvps4phByDX8', '_blank')
        }}>
          <Image
            src="/grid/Holi_2023_1.jpg"
            gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            Holi 2023
          </Text>
        </div>
        <div className="image-container" onClick={()=>{
          window.open('https://photos.app.goo.gl/mwD3Zz2wcNjps5m39', '_blank')
        }}>
          <Image
            src="/grid/DJ_Night_2.jpg"
            gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            DJ Night
          </Text>
        </div>
        {/* <div className="image-container">
          <Image
            src="/grid/5.png"
            gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            Sample Event 2
          </Text>
        </div>
        <div className="image-container">
          <Image
            src="/grid/6.png"
            gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
          />
          <Text
            as="h3" 
            className='image-text'
            color="rgb(255,255,255)"
            fontWeight="bold"
            fontSize="30px"
          >
            Sample Event 2
          </Text>
        </div> */}
      </Grid>
    </Flex>
  )
}

export default OurProject
