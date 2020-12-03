import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/SignIn';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Signin} />
    </Switch>
)

export default Routes;