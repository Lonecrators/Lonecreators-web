import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../common/History/History';

import HomePage from '../components/Home/Home';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Contests from '../components/Contests/Contests';

export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
            <Route path="/contests" component={Contests} />
        </Switch>
    </Router>
);
