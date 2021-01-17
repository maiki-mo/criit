import React from 'react';

import LineBreak from './LineBreak';

import styles from '../constants/styles';

const { flex, colors } = styles;

export default ( { containerStyles, seconds } ) => {
    const localStyles = {
        container: {
            height: '35%',
            width: '100%',
            paddingTop: '15%',
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
            fontWeight: 'bold',
            fontSize: 200,
            color: colors.lightBlue,
        },
    };

    return (
        <section style={localStyles.container}>
            <p style={localStyles.seconds}>{seconds || 0}</p>
            <div style={localStyles.breakContainer}>
                <LineBreak
                    width="85%"
                    active={seconds}
                />
                <LineBreak
                    width="55%"
                    active={seconds}
                />
                <LineBreak
                    width="35%"
                    active={seconds}
                />
            </div>
        </section>
    );
};
