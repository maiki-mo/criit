import React from 'react';

import styles from '../constants/styles';

const { flex, colors } = styles;

export default ( {
    containerStyles,
    reps,
    totalSeconds,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
            paddingRight: '5%',
            paddingLeft: '5%',
            height: '4%',
            width: '100%',
            ...containerStyles,
        },
        text: {
            margin: 0,
            color: colors.lightBlue,
            fontWeight: 'bold',
            fontSize: 18,
        },
        textEmphasis: {
            color: colors.white,
            fontSize: 24,
        },
    };

    return (
        <section style={localStyles.container}>
            <p style={localStyles.text}>
                <span style={localStyles.textEmphasis}>{`${totalSeconds}  `}</span>
                Seconds
            </p>
            <p style={localStyles.text}>
                <span style={localStyles.textEmphasis}>{`${reps}  `}</span>
                Reps
            </p>
        </section>
    );
};
