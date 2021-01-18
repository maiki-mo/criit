import React from 'react';

import LineBreak from './LineBreak';

import styles from '../constants/styles';

const { flex, colors } = styles;

const getSecondsColor = ( { seconds } ) => {
    let color = colors.lightBlue;

    if ( seconds === 3 ) {
        color = 'green';
    } else if ( seconds === 2 ) {
        color = 'orange';
    } else if ( seconds === 1 ) {
        color = 'red';
    }

    return color;
};

export default ( { containerStyles, seconds } ) => {
    const localStyles = {
        container: {
            height: '35%',
            width: '100%',
            paddingTop: '15%',
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

    return (
        <section style={localStyles.container}>
            <p style={{ ...localStyles.seconds, color: getSecondsColor( { seconds } ) }}>{seconds || 0}</p>
            <div style={localStyles.breakContainer}>
                <LineBreak
                    width="85%"
                    active={seconds % 3 === 0}
                />
                <LineBreak
                    width="55%"
                    active={seconds % 2 === 0}
                />
                <LineBreak
                    width="35%"
                    active={seconds % 1 === 0}
                />
            </div>
        </section>
    );
};
