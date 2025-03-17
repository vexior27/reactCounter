import logo from './logo.svg';
import './App.css';

import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      nigger
    </MantineProvider>
  );
}

export default App;
