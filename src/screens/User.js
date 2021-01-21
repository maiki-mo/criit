import React from 'react';

import styles from '../constants/styles';

import ScreenHeader from '../components/ScreenHeader';

const { colors, flex } = styles;

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            ...containerStyles,
            paddingLeft: 30,
            paddingRight: 30,
            ...containerStyles,
        },
    };

    return (
        <div style={localStyles.container}>
            <ScreenHeader
                title="User"
                titleColor={colors.lightBlue}
                titleSize={18}
            />
        </div>
    );
};
