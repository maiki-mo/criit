/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';

import ControlButton from './ControlButton';

import styles from '../constants/styles';
import images from '../constants/images';

const { flex } = styles;

export default ( {
    playing,
    onPlayClick,
    onStopClick,
    onResetClick,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
            width: '115%',
            height: '30%',
        },
    };

    const resetRef = useRef( null );
    const pausePlayRef = useRef( null );
    const stopRef = useRef( null );

    const handlePress = ( { ref } ) => {
        ref.current.style.opacity = 0.4;
        setTimeout( () => {
            ref.current.style.opacity = 1;
        }, 200 );
    };

    const handleOnPlayClick = () => {
        handlePress( { ref: pausePlayRef } );
        onPlayClick();
    };
    const handleOnStopClick = () => {
        handlePress( { ref: stopRef } );
        onStopClick();
    };
    const handleOnResetClick = () => {
        handlePress( { ref: resetRef } );
        onResetClick();
    };

    return (
        <section style={localStyles.container}>
            <ControlButton
                refProp={resetRef}
                onClick={handleOnResetClick}
                value="Reset"
                icon={images.resetButton}
                imageSize={70}
            />
            <ControlButton
                refProp={pausePlayRef}
                onClick={handleOnPlayClick}
                value="Play/Pause"
                icon={playing ? images.pauseButton : images.playButton}
                imageSize={100}
            />
            <ControlButton
                refProp={stopRef}
                onClick={handleOnStopClick}
                value="Stop"
                icon={images.stopButton}
                imageSize={70}
            />
        </section>
    );
};
