import React from 'react';

export default ( { width, color } ) => {
    const localStyles = {
        container: {
            width: width || '100%',
            borderBottom: `4px solid ${color}`,
        },
    };

    return <div style={localStyles.container} />;
};
