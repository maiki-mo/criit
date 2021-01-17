import React from 'react';

import styles from '../constants/styles';

const { flex, colors } = styles;

export default ( { containerStyles, seconds } ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            height: '50%',
            width: '100%',
            ...containerStyles,
        },
        seconds: {
            ...flex.centerFlexRow,
            width: 250,
            height: 250,
            fontWeight: 'bold',
            fontSize: 150,
            color: colors.lightBlue,
            borderBottom: '6px solid #A7B7C3',
        },
    };

    return (
        <div style={localStyles.container}>
            <p style={localStyles.seconds}>
                {seconds}
            </p>
        </div>
    );
};
