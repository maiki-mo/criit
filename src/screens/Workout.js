import React, { useState, useEffect } from 'react';

import ActivityHeader from '../components/ActivityHeader';
import Counter from '../components/Counter';
import Controls from '../components/Controls';

// import audio from '../constants/audio';

// const { schoolBell } = audio;

export default ( { containerStyles } ) => {
    const [seconds, setSeconds] = useState( null );
    const [reps, setReps] = useState( null );
    const [secsInterval, setSecsInterval] = useState( null );
    // const bell = new Audio( schoolBell );

    const setSecondInterval = () => setInterval( () => setSeconds( ( seconds ) => seconds + 1 ), 1000 );

    const handlePlayClick = () => {
        if ( secsInterval ) {
            clearInterval( secsInterval );
            setSecsInterval( null );
            return;
        }
        const interval = setSecondInterval();
        setSecsInterval( interval );
    };
    const handleStopClick = () => {
        clearInterval( secsInterval );
        setSeconds( null );
        setSecsInterval( null );
    };
    const handleResetClick = () => {
        setReps( null );
        setSeconds( null );
    };

    useEffect( () => {
        if ( seconds >= 4 ) {
            handleStopClick();
            // bell.play();
            console.log( 'bell plays' );
        }

        if ( reps >= 8 ) {
            console.log( 'reps should end' );
        }
    }, [seconds] );

    const localStyles = {
        container: {
            height: '100%',
            width: '100%',
            ...containerStyles,
        },
    };

    return (
        <main style={localStyles.container}>
            <ActivityHeader
                reps={reps}
                totalSeconds={20}
            />
            <Counter
                seconds={seconds}
            />
            <Controls
                playing={secsInterval}
                onPlayClick={handlePlayClick}
                onResetClick={handleResetClick}
                onStopClick={handleStopClick}
            />
        </main>
    );
};
