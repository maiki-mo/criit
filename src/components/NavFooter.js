import React from 'react';

import constants from '../constants';

const { styles: { flex } } = constants;

export default ( {
    icon,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: '#A7B7C3',
            height: '8%',
        },
    };

    return (
        <div style={localStyles.container}>
            <h1>{icon}</h1>
        </div>
    );
};
