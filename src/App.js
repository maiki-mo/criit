import React, {
    lazy,
    Suspense,
    useEffect,
} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import styles from './constants/styles';

const Workout = lazy( () => import( './screens/Workout' ) );
const User = lazy( () => import( './screens/User' ) );
const Settings = lazy( () => import( './screens/Settings' ) );
const NavFooter = lazy( () => import( './components/NavFooter' ) );

export default () => {
    const localStyles = {
        container: {
            ...styles.font.overpass,
            height: '100vh',
            width: '100vw',
            backgroundColor: '#123652',
        },
    };

    const setWakeLock = async () => {
        try {
            await navigator.wakeLock.request( 'screen' );
        } catch ( error ) {
            console.log( 'wake lock not available' );
        }
    };

    const handleVisibilityChange = () => {
        if ( document.visibilityState === 'visible' ) {
            setWakeLock();
        }
    };

    useEffect( () => {
        setWakeLock();
        document.addEventListener( 'visibilitychange', handleVisibilityChange );
    }, [] );

    return (
        <div className="App" style={localStyles.container}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
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
                    <NavFooter />
                </Suspense>
            </Router>
        </div>
    );
};
