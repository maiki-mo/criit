import React from 'react';

import ControlButton from './ControlButton';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    onPlayClick,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-around',
            width: '100%',
            height: '50%',
        },
    };

    return (
        <div style={localStyles.container}>
            <ControlButton size={24} onClick={() => null} value="Reset" />
            <ControlButton size={30} onClick={onPlayClick} value="Play" />
            <ControlButton size={24} onClick={() => null} value="Stop" />
        </div>
    );
};
