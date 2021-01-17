import React from 'react';

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
