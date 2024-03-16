import React from 'react'
import { Box, Flex, Link, Button, Stack } from '@chakra-ui/core'
import Logo from './logo'

interface MenuItem {
  link?: string
}

const MenuItems: React.FC<MenuItem> = ({ children, link }) => (
  <Link
    href={link}
    mt={[4, 4, 0, 0]}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize="md"
  >
    {children}
  </Link>
)

const Nav = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '8%']}
      alignItems={"center"}
      paddingY="1em"
      color="black"
      display={"flex"}
      textTransform="uppercase"
      bg="rgba(0,0,0,0.5)"
      boxShadow="0 0 5px 0 rgba(0,0,0,0.5)"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        color={'rgb(255,255,255)'}
        textAlign="center"
        alignItems="center"
      >
        <MenuItems link={"#home"}>Home</MenuItems>
        <MenuItems link={"#about"}>About</MenuItems>
        <MenuItems link={"#services"}>Services</MenuItems>
        <MenuItems link={"#team"}>Team</MenuItems>
        <MenuItems link={"#events"}>Events</MenuItems>
        <MenuItems link={"#contact"}>Contact</MenuItems>
        {/* <Stack spacing={0} direction="row" align="center" marginLeft={20} >
          <Button variantColor="yellow">Create an account</Button>
          <Button variantColor="yellow" variant="ghost">
            sign in
          </Button>
        </Stack> */}
       
      </Box>
    </Flex>
  )
}

export default Nav
