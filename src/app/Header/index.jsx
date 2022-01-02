import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';
import SignInSide from '../User/SignInSide';

export default () => (
        <main>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/SignInSide' component={SignInSide} />
            </Switch>
        </main>
);