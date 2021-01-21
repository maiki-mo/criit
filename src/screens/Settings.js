import React from 'react';
import { useRecoilState } from 'recoil';

import styles from '../constants/styles';
import state from '../constants/state';
import services from '../services';

import ToggleSwitchItem from '../components/ToggleSwitchItem';
import ScreenHeader from '../components/ScreenHeader';

const { colors, flex } = styles;
const { wakeLock, sound } = state;
const { setSoundOption, setWakeLockOption } = services;

// const SettingsInput = ( {
//     label,
//     value,
//     containerStyles,
// } ) => {
//     const localStyles = {
//         container: {
//             width: '100%',
//             ...containerStyles,
//             borderBottom: `1px solid ${colors.lightBlue} `,
//             paddingTop: 20,
//             paddingBottom: 20,
//         },
//         label: {
//             margin: 0,
//             color: colors.lightBlue,
//             paddingBottom: 20,
//         },
//         input: {
//             margin: 0,
//             fontSize: 40,
//             color: colors.lightBlue,
//             textAlign: 'center',
//         },
//     };

//     return (
//         <div style={localStyles.container}>
//             <div style={localStyles.inputs}>
//                 <h1 style={localStyles.label}>{label}</h1>
//                 <p style={localStyles.input}>{value}</p>
//             </div>
//         </div>
//     );
// };

// const SettingsButtons = ( { containerStyles } ) => {
//     const localStyles = {
//         container: {
//             height: '40%',
//             ...flex.centerFlexCol,
//             ...containerStyles,
//         },
//     };

//     return (
//         <section style={localStyles.container}>
//             <h1>Hi</h1>
//         </section>
//     );
// };

// const SettingsInputs = ( { containerStyles } ) => {
//     const localStyles = {
//         container: {
//             width: '100%',
//             height: '40%',
//             ...flex.centerFlexCol,
//             ...containerStyles,
//         },
//     };

//     return (
//         <section style={localStyles.container}>
//             <SettingsInput
//                 label="Label"
//                 value="Value"
//             />
//             <SettingsInput
//                 label="Label"
//                 value="Value"
//             />
//         </section>
//     );
// };

export default ( { containerStyles } ) => {
    const [wakeLocked, setWakeLock] = useRecoilState( wakeLock );
    const [soundOn, setSound] = useRecoilState( sound );

    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            ...containerStyles,
            paddingLeft: 30,
            paddingRight: 30,
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
        <div style={localStyles.container}>
            <ScreenHeader
                title="Settings"
                titleColor={colors.lightBlue}
                titleSize={18}
            />
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
        </div>
    );
};
