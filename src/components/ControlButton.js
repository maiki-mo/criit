import React from 'react';

export default ( {
    onClick,
    value,
    icon,
    refProp,
    imageSize,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            backgroundColor: 'transparent',
            border: 'none',
            ...containerStyles,
            padding: 0,
        },
    };

    return (
        <button
            type="button"
            style={localStyles.container}
            onClick={onClick}
            ref={refProp}
        >
            <img
                style={{ width: `${imageSize}%` }}
                src={icon}
                alt={value}
            />
        </button>
    );
};
