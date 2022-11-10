import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "eurisko-platform-data-grid-react/dist/cjs/index.css";

import HomePage from "./pages/HomePage/HomePage";
import PredifineTable from "./pages/PredifineTable/PredifineTable";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/table" component={PredifineTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
