import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Movies from "./component/Movies";


function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    <Hero/>
    <Movies/>

  </ChakraProvider>

  );
}

export default App;
