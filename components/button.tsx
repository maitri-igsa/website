import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'
import { PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraButton
      variantColor="orange"
      color="white"
      textTransform="uppercase"
      width="fit-content"
    >
      {children}
    </ChakraButton>
  )
}

export default Button
