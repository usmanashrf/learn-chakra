'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {Flex,Heading,Input, Button,useColorMode, useColorModeValue}  from '@chakra-ui/react'


export default function Home() {
  const {toggleColorMode}= useColorMode()
  const formBackground = useColorModeValue("gray.100","gray.700")
  return (
    <div>
      <Flex height="100vh" alignItems="center"  justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder='abc@xyz.com' variant="filled" mb={3} type="email"/>
        <Input placeholder='*******' variant="filled" mb={6} type="password"/>
        <Button mb={6} colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}>Toggle color</Button>
      </Flex>
    </Flex>
    </div>
    
    // <ChakraProvider>
    //   <h1>Hello Usman</h1>
    // </ChakraProvider>
  )
}
