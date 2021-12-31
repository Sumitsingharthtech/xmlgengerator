import React from 'react';
import App from './App';
import Data from './Data';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </Router>
        </div>
    )
}

export default Routes;
