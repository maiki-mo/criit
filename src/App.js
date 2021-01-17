import React from 'react';

import './App.css';
import styles from './constants/styles';

import Workout from './screens/Workout';
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
            <Workout />
            <NavFooter />
        </div>
    );
};
