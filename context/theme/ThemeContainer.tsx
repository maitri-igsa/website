import React from 'react'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from '../../styles/theme'
import { PropsWithChildren } from 'react';

const ThemeContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer
