/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import NavButton from './NavButton';

import styles from '../constants/styles';
import images from '../constants/images';

const { flex } = styles;

export default ( { containerStyles } ) => {
    const history = useHistory();
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100vw',
            height: '10%',
            backgroundColor: '#A7B7C3',
            zIndex: 1000,
            ...containerStyles,
        },
    };

    const settingsRef = useRef( null );
    const workoutRef = useRef( null );
    const userRef = useRef( null );

    const handlePress = ( { ref, path } ) => {
        ref.current.style.opacity = 0.4;
        setTimeout( () => {
            ref.current.style.opacity = 1;
        }, 200 );

        history.push( path );
    };

    const handleSettingsClick = () => handlePress( { ref: settingsRef, path: '/settings' } );
    const handleWorkoutClick = () => handlePress( { ref: workoutRef, path: '/workout' } );
    const handleUsersClick = () => handlePress( { ref: userRef, path: 'user' } );

    return (
        <footer style={localStyles.container}>
            <NavButton
                refProp={settingsRef}
                icon={images.settingsIcon}
                onClick={handleSettingsClick}
            />
            <NavButton
                refProp={workoutRef}
                icon={images.workoutIcon}
                onClick={handleWorkoutClick}
            />
            <NavButton
                refProp={userRef}
                icon={images.userIcon}
                onClick={handleUsersClick}
            />
        </footer>
    );
};
