import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";


function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    <Hero/>

  </ChakraProvider>

  );
}

export default App;
