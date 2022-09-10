import { useState } from 'react'
import { ChakraProvider, Text, Box } from '@chakra-ui/react'

import Teams from './Teams'

import './App.css'

export default function App() {
  

  
  return (
    <ChakraProvider>
      <Box>
        <Text fontSize='4xl'>Helloooo World</Text>
        <Teams />
      </Box>
    </ChakraProvider>
  )
}
