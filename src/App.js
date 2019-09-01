import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
