import React from 'react';
import { useRecoilState } from 'recoil';

import styles from '../constants/styles';
import state from '../constants/state';
import services from '../services';

import ToggleSwitchItem from '../components/ToggleSwitchItem';
import ScreenHeader from '../components/ScreenHeader';
// import SliderItem from '../components/SliderItem';

const { colors, flex } = styles;
const { wakeLock, sound, vibration } = state;
const { setSoundOption, setWakeLockOption, setVibrationOption } = services;

export default ( { containerStyles } ) => {
    const [wakeLocked, setWakeLock] = useRecoilState( wakeLock );
    const [soundOn, setSound] = useRecoilState( sound );
    const [vibrationOn, setVibration] = useRecoilState( vibration );

    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            paddingLeft: 20,
            paddingRight: 20,
            height: '100%',
            justifyContent: 'flex-start',
            ...containerStyles,
        },
        sectionContainer: {
            width: '100%',
            paddingBottom: '10%',
        },
        subHeader: {
            paddingBottom: '3%',
            color: colors.lightBlue,
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
        },
        subText: {
            color: colors.white,
            fontSize: 20,
            margin: 0,
        },
    };

    const handleStayWakeSwitch = () => {
        setWakeLockOption( { value: !wakeLocked } );
        setWakeLock( !wakeLocked );
    };

    const handleSoundSwitch = () => {
        setSoundOption( { value: !soundOn } );
        setSound( !soundOn );
    };

    const handleVibrationSwitch = () => {
        setVibrationOption( { value: !vibrationOn } );
        setVibration( !vibrationOn );
    };

    // const handleActivityTimeSlide = ( { value } ) => {
    //     console.log( value );
    // };

    // const handleCooldownTimeSlide = ( { value } ) => {
    //     console.log( value );
    // };

    return (
        <main style={localStyles.container}>
            <ScreenHeader
                title="Settings"
                titleColor={colors.white}
                titleSize={18}
                backgroundColor={colors.lightBlue}
            />
            <section style={localStyles.sectionContainer}>
                <div style={localStyles.subHeader}>
                    <h1 style={localStyles.subText}>Phone</h1>
                </div>
                <ToggleSwitchItem
                    onHandleColor={colors.blue}
                    offHandleColor={colors.grey}
                    text="Keep Screen Awake"
                    onColor={colors.lightBlue}
                    offColor={colors.lightBlue}
                    checked={wakeLocked}
                    onSwitch={handleStayWakeSwitch}
                    textColor={colors.lightBlue}
                />
                <ToggleSwitchItem
                    onHandleColor={colors.blue}
                    offHandleColor={colors.grey}
                    text="Sound"
                    onColor={colors.lightBlue}
                    offColor={colors.lightBlue}
                    checked={soundOn}
                    onSwitch={handleSoundSwitch}
                    textColor={colors.lightBlue}
                />
                <ToggleSwitchItem
                    onHandleColor={colors.blue}
                    offHandleColor={colors.grey}
                    text="Vibration"
                    onColor={colors.lightBlue}
                    offColor={colors.lightBlue}
                    checked={vibrationOn}
                    onSwitch={handleVibrationSwitch}
                    textColor={colors.lightBlue}
                />
            </section>
            <section style={localStyles.sectionContainer}>
                <div style={localStyles.subHeader}>
                    <h1 style={localStyles.subText}>Workout</h1>
                </div>
                {/* <SliderItem
                    colors={colors}
                    text="Activity Time"
                    onSlide={handleActivityTimeSlide}
                    textColor={colors.lightBlue}
                />
                <SliderItem
                    colors={colors}
                    text="Cooldown"
                    onSlide={handleCooldownTimeSlide}
                    textColor={colors.lightBlue}
                /> */}
            </section>
        </main>
    );
};
