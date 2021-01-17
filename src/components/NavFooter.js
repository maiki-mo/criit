import React from 'react';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    icon,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100vw',
            height: '9%',
            backgroundColor: '#A7B7C3',
            zIndex: 1000,
        },
    };

    return (
        <div style={localStyles.container}>
            <h1>{icon}</h1>
        </div>
    );
};
