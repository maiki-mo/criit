import React from 'react';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    onClick,
    value,
    icon,
    size,
    refProp,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            backgroundColor: 'transparent',
            height: `${size}vw`,
            width: `${size}vw`,
            border: 'none',
            ...containerStyles,
        },
    };

    return (
        <nav
            type="button"
            style={localStyles.container}
            onClick={onClick}
            ref={refProp}
        >
            <img src={icon} alt={value} />
        </nav>
    );
};
