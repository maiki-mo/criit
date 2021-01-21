import React from 'react';

export default ( {
    title,
    titleColor,
    titleSize,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            width: '100%',
            ...containerStyles,
        },
        text: {
            textAlign: 'left',
            paddingBottom: 10,
            color: titleColor,
            fontSize: titleSize,
        },
    };

    return (
        <section style={localStyles.container}>
            <h1 style={localStyles.text}>{title}</h1>
        </section>
    );
};
