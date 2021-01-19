import React from 'react';

import styles from '../constants/styles';

const { colors, flex } = styles;

const SettingsInput = ( {
    label,
    value,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            width: '100%',
            ...containerStyles,
            borderBottom: `1px solid ${colors.lightBlue} `,
            paddingTop: 20,
            paddingBottom: 20,
        },
        label: {
            margin: 0,
            color: colors.lightBlue,
            paddingBottom: 20,
        },
        input: {
            margin: 0,
            fontSize: 40,
            color: colors.lightBlue,
            textAlign: 'center',
        },
    };

    return (
        <div style={localStyles.container}>
            <div style={localStyles.inputs}>
                <h1 style={localStyles.label}>{label}</h1>
                <p style={localStyles.input}>{value}</p>
            </div>
        </div>
    );
};

const SettingsButtons = ( { containerStyles } ) => {
    const localStyles = {
        container: {
            height: '40%',
            ...flex.centerFlexCol,
            ...containerStyles,
        },
    };

    return (
        <section style={localStyles.container}>
            <h1>Hi</h1>
        </section>
    );
};

const SettingsInputs = ( { containerStyles } ) => {
    const localStyles = {
        container: {
            width: '100%',
            height: '40%',
            ...flex.centerFlexCol,
            ...containerStyles,
        },
    };

    return (
        <section style={localStyles.container}>
            <SettingsInput
                label="Label"
                value="Value"
            />
            <SettingsInput
                label="Label"
                value="Value"
            />
        </section>
    );
};

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            ...containerStyles,
            paddingLeft: 30,
            paddingRight: 30,
        },
    };

    return (
        <div style={localStyles.container}>
            <SettingsInputs />
            <SettingsButtons />
        </div>
    );
};
