import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Reset } from "styled-reset";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Reset />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;
