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
            height: '45%',
            width: '100%',
            paddingTop: '8%',
            paddingBottom: '5%',
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
            fontSize: 200,
            color: colors.white,
            paddingBottom: '10%',
        },
    };

    const color = secondsToColor( { seconds, colors } );

    return (
        <section style={localStyles.container}>
            <p style={{ ...localStyles.seconds, color }}>{seconds || 0}</p>
            <div style={localStyles.ringContainer}>
                <ProgressRing
                    percentage={completePercentage}
                    stroke={7}
                />
            </div>
        </section>
    );
};
