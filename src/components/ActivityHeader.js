import React from 'react';

import styles from '../constants/styles';

const { flex, colors } = styles;

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-around',
            height: '15%',
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
            <p style={localStyles.text}>T - 4:00</p>
            <p style={localStyles.text}>R - 8</p>
            <p style={localStyles.text}>T - 4:00</p>
        </section>
    );
};
