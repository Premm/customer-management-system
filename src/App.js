import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AddPage from "./pages/Add";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add" component={AddPage} />
        <Route exact path="/edit/:customerID" component={AddPage} />
      </Switch>
    </div>
  );
};

export default App;
