import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import styles from './constants/styles';

import Workout from './screens/Workout';
import User from './screens/User';
import Settings from './screens/Settings';
import NavFooter from './components/NavFooter';

export default () => {
    const localStyles = {
        container: {
            ...styles.font.overpass,
            height: '100vh',
            width: '100vw',
            backgroundColor: '#123652',
        },
    };

    return (
        <div className="App" style={localStyles.container}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/workout" />
                    </Route>
                    <Route exact path="/workout">
                        <Workout />
                    </Route>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/user">
                        <User />
                    </Route>
                </Switch>
            </Router>
            <NavFooter />
        </div>
    );
};
