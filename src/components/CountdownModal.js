import React, { useState, useEffect } from 'react';

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

    let textColor = colors.lightBlue;

    if ( seconds === 3 ) {
        textColor = 'green';
    } else if ( seconds === 2 ) {
        textColor = 'orange';
    } else if ( seconds === 1 ) {
        textColor = 'red';
    }

    const localStyles = {
        container: {
            ...containerStyles,
        },
        text: {
            fontWeight: 300,
            fontSize: 200,
            color: textColor,
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
