import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home}/>
                <Route  path="/about_me" component={AboutMe}/>
            </Switch>
        </BrowserRouter>
    );
}