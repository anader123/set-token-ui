import React from 'react';
import './App.css';

// Components
import Home from './Components/Home';
import StandardSet from './Components/StandardSet';
import RebalancingSet from './Components/RebalancingSet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/create-standard-set" component={StandardSet} />
          <Route path="/create-rebalancing-set" component={RebalancingSet} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
