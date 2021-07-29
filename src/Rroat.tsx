import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Board from './pages/Board/Board';
import Error from './pages/Error/Error';

function Rroat() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/board">
          <Board />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default Rroat;
