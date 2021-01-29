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
            marginBottom: '5%',
            backgroundColor,
            maxWidth: 650,
            ...containerStyles,
        },
        text: {
            paddingLeft: '3%',
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
