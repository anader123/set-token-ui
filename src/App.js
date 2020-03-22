import React from 'react';
import './App.css';

// Components
import Home from './Components/Home';
import StandardSet from './Components/StandardSet';
import RebalancingSet from './Components/RebalancingSet';

import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/create-standard-set" component={StandardSet} />
            <Route path="/create-rebalancing-set" component={RebalancingSet} />
            <Route path="/" component={Home} />
            
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
