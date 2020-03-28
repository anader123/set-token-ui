import React from 'react';
import './App.css';

// Components
import CreateHome from './Components/CreateHome';
import StandardSet from './Components/StandardSet';
import RebalancingSet from './Components/RebalancingSet';
import Header from './Components/Header';

import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
        <Router>
          <Switch>
            <Route path="/create/standard-set" component={StandardSet} />
            <Route path="/create/rebalancing-set" component={RebalancingSet} />
            <Route path="/" component={CreateHome} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
