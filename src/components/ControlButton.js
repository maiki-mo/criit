import React from 'react';

export default ( {
    onClick,
    value,
    icon,
    size,
} ) => {
    const localStyles = {
        container: {
            backgroundColor: 'transparent',
            height: `${size}vw`,
            width: `${size}vw`,
            border: 'none',
        },
    };

    return (
        <button type="button" style={localStyles.container} onClick={onClick}>
            <img src={icon} alt={value} />
        </button>
    );
};
