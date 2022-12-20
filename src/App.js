import { ChakraProvider } from '@chakra-ui/react'


import Navbar from './component/Navbar'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
     
    </ChakraProvider>
  )
}

export default App
