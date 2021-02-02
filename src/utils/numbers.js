const secondsToClockTime = ( { seconds } ) => {
    const mins = parseInt( seconds / 60, 10 );
    const secs = parseInt( seconds % 60, 10 );

    return `${
        mins.toString().length < 2 ? `0${mins}` : mins
    }:${
        secs.toString().length < 2 ? `0${secs}` : secs
    }`;
};

const secondsToColor = ( { seconds, colors } ) => {
    let color = colors.lightBlue;

    if ( seconds === 3 ) {
        color = colors.red;
    } else if ( seconds === 2 ) {
        color = colors.orange;
    } else if ( seconds === 1 ) {
        color = colors.green;
    } else if ( seconds === 0 ) {
        color = colors.white;
    }

    return color;
};

const percentageToColor = ( { percentage, colors } ) => {
    let color = colors.lightBlue;

    if ( percentage >= 85 && percentage <= 89 ) {
        color = colors.red;
    } else if ( percentage >= 90 && percentage <= 94 ) {
        color = colors.orange;
    } else if ( percentage >= 95 ) {
        color = colors.green;
    } else if ( percentage === 100 ) {
        color = colors.white;
    }

    return color;
};

export default {
    secondsToClockTime,
    secondsToColor,
    percentageToColor,
};
