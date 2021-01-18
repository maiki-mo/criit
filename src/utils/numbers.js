const secondsToClockTime = ( { seconds } ) => {
    const mins = parseInt( seconds / 60, 10 );
    const secs = parseInt( seconds % 60, 10 );

    return `${
        mins.toString().length < 2 ? `0${mins}` : mins
    }:${
        secs.toString().length < 2 ? `0${secs}` : secs
    }`;
};

export default {
    secondsToClockTime,
};
