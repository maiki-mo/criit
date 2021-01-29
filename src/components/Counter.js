import React from 'react';

import LineBreak from './LineBreak';

import numberUtils from '../utils/numbers';
import styles from '../constants/styles';

const { secondsToColor } = numberUtils;
const { flex, colors } = styles;

export default ( { containerStyles, seconds } ) => {
    const localStyles = {
        container: {
            height: '35%',
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
            color: colors.lightBlue,
            paddingBottom: '10%',
        },
    };

    const color = secondsToColor( { seconds, colors } );

    return (
        <section style={localStyles.container}>
            <p style={{ ...localStyles.seconds, color }}>{seconds || 0}</p>
            <div style={localStyles.breakContainer}>
                <LineBreak
                    width="85%"
                    color={color}
                />
                <LineBreak
                    width="55%"
                    color={color}
                />
                <LineBreak
                    width="35%"
                    color={color}
                />
                <LineBreak
                    width="15%"
                    color={color}
                />
            </div>
        </section>
    );
};
