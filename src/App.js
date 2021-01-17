import React from 'react';

import './App.css';

import Workout from './screens/Workout';

export default () => {
    const localStyles = {
        container: {
            height: '100vh',
            width: '100vw',
            backgroundColor: '#123652',
        },
    };

    return (
        <div className="App" style={localStyles.container}>
            <Workout />
        </div>
    );
};
