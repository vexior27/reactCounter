
import './App.css';

import '@mantine/core/styles.css';
import Counter from './components/Counter';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Counter/>
    </MantineProvider>
  );
}

export default App;
