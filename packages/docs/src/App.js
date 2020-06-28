import React from "react";
import { ThemeProvider } from "styled-components";
import { Bloc } from "blocjs";

import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Bloc color="surface" bg="primaries.4">
        Bloc
      </Bloc>
      <Bloc color="primary">BlocJS</Bloc>
      <Bloc color="primaryLight">BlocJS Library</Bloc>
    </ThemeProvider>
  );
};

export default App;
