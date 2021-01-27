import React from 'react';
import { useRecoilState } from 'recoil';

import styles from '../constants/styles';
import state from '../constants/state';
import services from '../services';

import ToggleSwitchItem from '../components/ToggleSwitchItem';
import ScreenHeader from '../components/ScreenHeader';
import SliderItem from '../components/SliderItem';

const { colors, flex } = styles;
const { wakeLock, sound } = state;
const { setSoundOption, setWakeLockOption } = services;

export default ( { containerStyles } ) => {
    const [wakeLocked, setWakeLock] = useRecoilState( wakeLock );
    const [soundOn, setSound] = useRecoilState( sound );

    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            paddingLeft: 30,
            paddingRight: 30,
            height: '100%',
            justifyContent: 'flex-start',
            ...containerStyles,
        },
        sectionContainer: {
            width: '100%',
            paddingBottom: '15%',
        },
        subHeader: {
            paddingBottom: '3%',
            color: colors.lightBlue,
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
        },
        subText: {
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

    return (
        <main style={localStyles.container}>
            <ScreenHeader
                title="Settings"
                titleColor={colors.lightBlue}
                titleSize={18}
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
            </section>
            <section style={localStyles.sectionContainer}>
                <div style={localStyles.subHeader}>
                    <h1 style={localStyles.subText}>Workout</h1>
                </div>
                <SliderItem
                    onHandleColor={colors.blue}
                    offHandleColor={colors.grey}
                    text="Activity Time"
                    onColor={colors.lightBlue}
                    offColor={colors.lightBlue}
                    checked={wakeLocked}
                    onSwitch={handleStayWakeSwitch}
                    textColor={colors.lightBlue}
                />
                <SliderItem
                    onHandleColor={colors.blue}
                    offHandleColor={colors.grey}
                    text="Cooldown"
                    onColor={colors.lightBlue}
                    offColor={colors.lightBlue}
                    checked={soundOn}
                    onSwitch={handleSoundSwitch}
                    textColor={colors.lightBlue}
                />
            </section>
        </main>
    );
};
