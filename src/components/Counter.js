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
            paddingTop: '5%',
            paddingBottom: '5%',
            ...containerStyles,
        },
        breakContainer: {
            ...flex.centerFlexCol,
            justifyContent: 'space-around',
            height: '25%',
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
            <div style={localStyles.breakContainer}>
                <ProgressRing
                    progress={completePercentage}
                    stroke={8}
                />
            </div>
        </section>
    );
};
