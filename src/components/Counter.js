import React from 'react';

import ProgressRing from './ProgressRing';

import numberUtils from '../utils/numbers';
import styles from '../constants/styles';

const { secondsToColor } = numberUtils;
const { flex, colors } = styles;

export default ( {
    containerStyles,
    seconds,
    completePercentage,
} ) => {
    const localStyles = {
        container: {
            height: '50%',
            width: '100%',
            position: 'relative',
            ...flex.centerFlexCol,
            ...containerStyles,
        },
        ringContainer: {
            ...flex.centerFlexCol,
            position: 'absolute',
            justifyContent: 'space-around',
            width: '100%',
        },
        seconds: {
            height: '55%',
            margin: 0,
            ...flex.centerFlexRow,
            fontWeight: 500,
            fontSize: 180,
            position: 'relative',
            bottom: 8,
            color: colors.white,
        },
    };

    const color = secondsToColor( { seconds, colors } );

    return (
        <section style={localStyles.container}>
            <p style={{ ...localStyles.seconds, color }}>{seconds || 0}</p>
            <div style={localStyles.ringContainer}>
                <ProgressRing
                    seconds={seconds}
                    percentage={completePercentage}
                    stroke={7}
                />
            </div>
        </section>
    );
};
