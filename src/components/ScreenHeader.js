import React from 'react';

export default ( {
    title,
    titleColor,
    titleSize,
    backgroundColor,
    textSyles,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            width: '100vw',
            paddingLeft: '10%',
            marginBottom: '5%',
            backgroundColor,
            ...containerStyles,
        },
        text: {
            textAlign: 'left',
            color: titleColor,
            fontSize: titleSize,
            ...textSyles,
        },
    };

    return (
        <section style={localStyles.container}>
            <h1 style={localStyles.text}>{title}</h1>
        </section>
    );
};
