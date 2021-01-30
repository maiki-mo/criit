import React, { useState, useEffect } from 'react';

import numberUtils from '../utils/numbers';

const { secondsToColor } = numberUtils;

export default ( {
    containerStyles,
    onFinish,
    colors,
} ) => {
    const [seconds, setSeconds] = useState( 3 );

    useEffect( () => {
        const setSecondsInterval = () => setInterval( () => setSeconds( ( seconds ) => seconds - 1 ), 1000 );
        setSecondsInterval();
    }, [] );

    useEffect( () => {
        if ( seconds === 0 ) {
            onFinish();
        }
    }, [seconds] );

    const localStyles = {
        container: {
            ...containerStyles,
        },
        text: {
            fontWeight: 300,
            fontSize: 200,
            color: secondsToColor( { seconds, colors } ),
        },
    };

    return (
        <div style={localStyles.container}>
            <h1 style={localStyles.text}>
                {seconds}
            </h1>
        </div>
    );
};
