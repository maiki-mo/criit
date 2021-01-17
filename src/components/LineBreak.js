import React from 'react';

import styles from '../constants/styles';

const { colors } = styles;

export default ( { width, active } ) => {
    const localStyles = {
        container: {
            width: width || '100%',
            borderBottom: `4px solid ${active ? colors.white : colors.lightBlue}`,
        },
    };

    return <div style={localStyles.container} />;
};
