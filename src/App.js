import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Normalize />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
