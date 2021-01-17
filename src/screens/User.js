import React from 'react';

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            ...containerStyles,
        },
    };

    return (
        <div style={localStyles.container} />
    );
};
