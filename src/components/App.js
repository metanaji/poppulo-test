import React from 'react';
import PplTextField from "./PplTextField/PplTextField";
import PploHeader from "./PploHeader/PploHeader";
import PploMobile from "./PploMobile/PploMobile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">

    <Router>
      <div>
           <PploHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comms">
            <Comms />
          </Route>
          <Route path="/mobile">
            <PploMobile />
          </Route>
           <Route path="/people">
            <People />
          </Route>
           <Route path="/reports">
            <Reports />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Comms() {
  return (
    <div>
      <h2>Comms</h2>
    </div>
  );
}

function People() {
  return (
    <div>
      <h2>People</h2>
    </div>
  );
}

function Reports() {
  return (
    <div>
      <h2>Reports</h2>
    </div>
  );
}