import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import history from '../common/History/History';

import HomePage from '../components/Home/Home';

export default () => (
  	<Router history={history}>
		<div>
	  		<Switch>
				<Route path="/" exact component={HomePage} />
	  		</Switch>
		</div>
  	</Router>
);
