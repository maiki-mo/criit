/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import NavButton from './NavButton';

import styles from '../constants/styles';
import images from '../constants/images';

const { flex } = styles;

export default ( { containerStyles } ) => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
            width: '100vw',
            height: '10%',
            backgroundColor: '#A7B7C3',
            zIndex: 100,
            margin: '0 auto',
            maxWidth: 650,
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

        push( path );
    };

    const handleSettingsClick = () => handlePress( { ref: settingsRef, path: '/settings' } );
    const handleWorkoutClick = () => handlePress( { ref: workoutRef, path: '/workout' } );
    const handleUsersClick = () => handlePress( { ref: userRef, path: 'user' } );

    return (
        <footer style={localStyles.container}>
            <NavButton
                refProp={settingsRef}
                icon={pathname === '/settings'
                    ? images.settingsIcon
                    : images.settingsIconGrey}
                onClick={handleSettingsClick}
            />
            <NavButton
                refProp={workoutRef}
                icon={pathname === '/workout'
                    ? images.workoutIcon
                    : images.workoutIconGrey}
                onClick={handleWorkoutClick}
            />
            <NavButton
                refProp={userRef}
                icon={pathname === '/user'
                    ? images.userIcon
                    : images.userIconGrey}
                onClick={handleUsersClick}
            />
        </footer>
    );
};
