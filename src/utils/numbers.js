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
    let color = colors.white;

    if ( seconds === 3 ) {
        color = 'green';
    } else if ( seconds === 2 ) {
        color = 'orange';
    } else if ( seconds === 1 ) {
        color = 'red';
    } else if ( seconds === 0 ) {
        color = colors.lightBlue;
    }

    return color;
};

const percentageToColor = ( { percentage, colors } ) => {
    console.log( percentage, colors );
};

export default {
    secondsToClockTime,
    secondsToColor,
    percentageToColor,
};
