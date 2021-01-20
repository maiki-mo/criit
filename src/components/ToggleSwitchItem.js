import React from 'react';
import Switch from 'react-switch';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    containerStyles,
    checked,
    onSwitch,
    onColor,
    offColor,
    onHandleColor,
    text,
    textColor,
    offHandleColor,
} ) => {
    const localStyles = {
        container: {
            width: '100%',
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'left',
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
            paddingTop: 15,
            paddingBottom: 15,
            borderBottom: `1px solid ${textColor}`,
            ...containerStyles,
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: textColor,
        },
    };

    return (
        <div style={localStyles.container}>
            <span style={localStyles.text}>{text}</span>
            <Switch
                handleDiameter={20}
                offColor={offColor}
                onHandleColor={onHandleColor}
                offHandleColor={offHandleColor}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={onColor}
                checked={checked}
                onChange={onSwitch}
                height={30}
                width={60}
            />
        </div>
    );
};
