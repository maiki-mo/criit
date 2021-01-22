import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import ActivityHeader from '../components/ActivityHeader';
import Counter from '../components/Counter';
import Controls from '../components/Controls';
import Modal from '../components/Modal';

import audio from '../constants/audio';
import state from '../constants/state';
import styles from '../constants/styles';

const { colors } = styles;
const { sound } = state;
const { boxingBell, blowWhistle } = audio;

const CountdownModal = ( { containerStyles, onFinish, colors } ) => {
    const [seconds, setSeconds] = useState( 3 );

    useEffect( () => {
        const setSecondsInterval = () => setInterval( () => setSeconds( ( seconds ) => seconds - 1 ), 1000 );
        setSecondsInterval();
    }, [] );

    useEffect( () => {
        if ( seconds === -1 ) {
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
    } else if ( seconds === 0 ) {
        textColor = colors.white;
    }

    const localStyles = {
        container: {
            ...containerStyles,
        },
        text: {
            fontWeight: 300,
            fontSize: 180,
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

export default ( { containerStyles } ) => {
    const [seconds, setSeconds] = useState( 20 );
    const [totalSeconds, setTotalSeconds] = useState( 0 );
    const [reps, setReps] = useState( 0 );
    const [secsInterval, setSecsInterval] = useState( null );
    const [cooldown, setCooldown] = useState( false );
    const [soundOn] = useRecoilState( sound );
    const [modal, setModal] = useState( true );
    // const [startCountdown, setStartCountdown] = useState( true );

    const bell = new Audio( boxingBell );
    const whistle = new Audio( blowWhistle );

    const setCooldownInterval = () => setInterval( () => setSeconds( ( seconds ) => seconds - 1 ), 1000 );

    const setSecondsInterval = () => setInterval( () => {
        setTotalSeconds( ( seconds ) => seconds + 1 );
        return setSeconds( ( seconds ) => seconds - 1 );
    }, 1000 );

    // const handleStartCountdown = () => {
    //     setSeconds( 3 );
    //     setSecondsInterval();
    // };

    const handlePlayClick = () => {
        if ( secsInterval ) {
            clearInterval( secsInterval );
            setSecsInterval( null );
            return;
        }
        const interval = setSecondsInterval();
        setSecsInterval( interval );
        if ( soundOn ) {
            whistle.play();
        }
        window.navigator.vibrate( 200 );
    };
    const handleStopClick = () => {
        clearInterval( secsInterval );
        setSecsInterval( null );
        setSeconds( 20 );
    };
    const handleResetClick = () => {
        setReps( 0 );
        setSeconds( 20 );
        setTotalSeconds( 0 );
        setCooldown( false );
        setSecsInterval( null );
    };
    const initCooldownInterval = () => {
        setCooldown( true );
        setSeconds( 10 );
        clearInterval( secsInterval );
        const interval = setCooldownInterval();
        setSecsInterval( interval );
    };
    const initActivityInteral = () => {
        setSeconds( 20 );
        const interval = setSecondsInterval();
        setSecsInterval( interval );
        if ( soundOn ) {
            whistle.play();
        }
        window.navigator.vibrate( 200 );
    };
    const stopCooldownInterval = () => {
        setCooldown( false );
        clearInterval( secsInterval );
        setSecsInterval( null );
        initActivityInteral();
    };
    const stopActivityInterval = () => {
        setTotalSeconds( ( seconds ) => seconds );
        setReps( ( reps ) => reps + 1 );
        initCooldownInterval();
        if ( soundOn ) {
            bell.play();
        }
        window.navigator.vibrate( 200 );
    };
    const handleModalClose = () => {
        setModal( false );
        handlePlayClick();
    };

    useEffect( () => {
        if ( seconds < 1 ) {
            if ( cooldown ) {
                stopCooldownInterval();
            } else {
                stopActivityInterval();
            }
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
                totalSeconds={totalSeconds}
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
            <Modal display={modal}>
                <CountdownModal colors={colors} onFinish={handleModalClose} />
            </Modal>
        </main>
    );
};
