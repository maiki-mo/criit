import React from 'react';

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            ...containerStyles,
        },
    };

    // const handleOnPlay = () => {
    //     const alarm = new Audio( schoolBell );
    //     alarm.play();
    // };

    return (
        <div style={localStyles.container}>
            <h1>Hi</h1>
        </div>
    );
};
