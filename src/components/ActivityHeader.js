import React from 'react';

import styles from '../constants/styles';
import numbersUtil from '../utils/numbers';

const { secondsToClockTime } = numbersUtil;
const { flex, colors } = styles;

export default ( {
    containerStyles,
    reps,
    totalSeconds,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-around',
            height: '10%',
            ...containerStyles,
        },
        text: {
            margin: 0,
            color: colors.lightBlue,
            fontWeight: 'bold',
            fontSize: 22,
        },
    };

    return (
        <section style={localStyles.container}>
            <p style={localStyles.text}>{`T - ${secondsToClockTime( { seconds: totalSeconds } )}`}</p>
            <p style={localStyles.text}>{`R - ${reps}`}</p>
            <p style={localStyles.text}>T - 4:00</p>
        </section>
    );
};
