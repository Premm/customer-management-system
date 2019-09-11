import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/Home";
import AddPage from "./pages/Add";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
  }`;

const theme = {
  colors: {
    primary: "#ffd028",
    primaryDark: "#e3b922",
    secondary: "#1b1b1b",
    secondaryDark: "#121212",
    light: "#f4f7ee",
    dark: "#29272c",
    grey: "#dfdfdf",
    warning: "#e94516"
  },
  layout: {
    padding: "10px 20px",
    borderRadius: "5px;"
  },
  fontFamily: "Roboto, sans-serif"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/edit/:customerID" component={AddPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
