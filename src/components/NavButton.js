import React from 'react';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    onClick,
    value,
    icon,
    size,
    refProp,
    continarStyles,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            backgroundColor: 'transparent',
            height: `${size}vw`,
            width: `${size}vw`,
            border: 'none',
            ...continarStyles,
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
