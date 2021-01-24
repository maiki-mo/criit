import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import ActivityHeader from '../components/ActivityHeader';
import Counter from '../components/Counter';
import Controls from '../components/Controls';
import Modal from '../components/Modal';
import AdModal from '../components/AdModal';
import CountdownModal from '../components/CountdownModal';

import audio from '../constants/audio';
import state from '../constants/state';
import styles from '../constants/styles';
import images from '../constants/images';

const { closeIcon } = images;
const { colors } = styles;
const {
    sound,
    cooldownSeconds,
    activitySeconds,
    maxReps,
} = state;
const { boxingBell, blowWhistle } = audio;

export default ( { containerStyles } ) => {
    const [initActivitySeconds] = useRecoilState( activitySeconds );
    const [initCooldownSeconds] = useRecoilState( cooldownSeconds );
    const [seconds, setSeconds] = useState( initActivitySeconds );
    const [totalSeconds, setTotalSeconds] = useState( 0 );
    const [reps, setReps] = useState( 7 );
    const [repsLimit] = useRecoilState( maxReps );
    const [secsInterval, setSecsInterval] = useState( null );
    const [cooldown, setCooldown] = useState( false );
    const [soundOn] = useRecoilState( sound );
    const [countdownModal, setCountdownModal] = useState( false );
    const [completeModal, setCompleteModal] = useState( true );

    const bell = new Audio( boxingBell );
    const whistle = new Audio( blowWhistle );

    const setCooldownInterval = () => setInterval( () => setSeconds( ( seconds ) => seconds - 1 ), 1000 );
    const setSecondsInterval = () => setInterval( () => {
        setTotalSeconds( ( seconds ) => seconds + 1 );
        return setSeconds( ( seconds ) => seconds - 1 );
    }, 1000 );

    const handlePlayClick = () => {
        if ( secsInterval ) {
            clearInterval( secsInterval );
            setSecsInterval( null );
            return;
        }
        setCountdownModal( true );
    };
    const handleStopClick = () => {
        clearInterval( secsInterval );
        setSecsInterval( null );
        setSeconds( initActivitySeconds );
    };
    const handleResetClick = () => {
        clearInterval( secsInterval );
        setSecsInterval( null );
        setReps( 0 );
        setSeconds( initActivitySeconds );
        setTotalSeconds( 0 );
        setCooldown( false );
    };
    const initCooldownInterval = () => {
        setCooldown( true );
        setSeconds( initCooldownSeconds );
        clearInterval( secsInterval );
        const interval = setCooldownInterval();
        setSecsInterval( interval );
    };
    const initActivityInteral = () => {
        setSeconds( initActivitySeconds );
        const interval = setSecondsInterval();
        setSecsInterval( interval );
        if ( soundOn ) {
            whistle.play();
        }
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
    };
    const handleModalClose = () => {
        setCountdownModal( false );
        initActivityInteral();
    };
    const handleFinishedExercise = () => {
        clearInterval( secsInterval );
        setSecsInterval( null );
        setCompleteModal( true );
        setSeconds( 0 );
        if ( soundOn ) {
            bell.play();
        }
    };
    const handleAdModalClose = () => {
        // save workout potentially to local storage
        // reset workout screen
        handleResetClick();
        setCompleteModal( false );
    };

    useEffect( () => {
        if ( seconds < 1 ) {
            if ( cooldown ) {
                stopCooldownInterval();
            } else {
                if ( reps >= ( repsLimit - 1 ) ) {
                    return handleFinishedExercise();
                }
                return stopActivityInterval();
            }
        }
        return null;
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
            <Modal display={countdownModal}>
                <CountdownModal
                    colors={colors}
                    onFinish={handleModalClose}
                />
            </Modal>
            <Modal display={completeModal}>
                <AdModal
                    closeIcon={closeIcon}
                    onIconClick={handleAdModalClose}
                    colors={colors}
                />
            </Modal>
        </main>
    );
};
