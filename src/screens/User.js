import React from 'react';
import {
    useRecoilState,
} from 'recoil';

import styles from '../constants/styles';
import state from '../constants/state';

import ScreenHeader from '../components/ScreenHeader';

const { colors, flex } = styles;
const { completedWorkouts } = state;

export default ( { containerStyles } ) => {
    const [pastWorkouts] = useRecoilState( completedWorkouts );
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            ...containerStyles,
            paddingLeft: 30,
            paddingRight: 30,
            height: '100%',
            justifyContent: 'flex-start',
            ...containerStyles,
        },
        subContainer: {
            width: '100%',
        },
        subHeader: {
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

    return (
        <main style={localStyles.container}>
            <ScreenHeader
                title="User"
                titleColor={colors.white}
                titleSize={18}
            />
            <section style={localStyles.subContainer}>
                <div style={localStyles.subHeader}>
                    <h1 style={localStyles.subText}>Finished Workouts</h1>
                    <h1 style={localStyles.subText}>Workout</h1>
                </div>
                <div>
                    {JSON.stringify( pastWorkouts ) }
                </div>
            </section>
            {/* <section style={localStyles.subContainer}>
                <div style={localStyles.subHeader}>
                    <h1 style={localStyles.subText}>Finished Workouts</h1>
                    <h1 style={localStyles.subText}>Workout</h1>
                </div>
            </section> */}
        </main>
    );
};
