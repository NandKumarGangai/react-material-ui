import React from 'react';
import { Switch, Route } from 'react-router-dom';

function NestMain() {
    return (
        <main>
            <Switch>
                <Route path='/nest-roster' component={() => <h1>nest-roster</h1>}></Route>
                <Route path='/nest-schedule' component={() => <h1>nest-schedule</h1>}></Route>
            </Switch>
        </main>
    );
}

export default NestMain;