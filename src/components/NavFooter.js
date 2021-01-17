/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';

import NavButton from './NavButton';

import styles from '../constants/styles';
import images from '../constants/images';

const { flex } = styles;

export default ( { containerStyles } ) => {
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

    const handlePress = ( { ref } ) => {
        ref.current.style.opacity = 0.4;
        setTimeout( () => {
            ref.current.style.opacity = 1;
        }, 200 );
    };

    const handleSettingsClick = () => handlePress( { ref: settingsRef } );
    const handleWorkoutClick = () => handlePress( { ref: workoutRef } );
    const handleUsersClick = () => handlePress( { ref: userRef } );

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
