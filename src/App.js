import React from 'react';
import Sheet from "./Sheet";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from './theme.js'

class App extends React.Component {
    render() {
        return (
          <ThemeProvider theme={theme}>
              <Sheet/>
          </ThemeProvider>
        )
    }
}

export default App;
