import React from 'react';
// import AdSense from 'react-adsense';

export default ( {
    containerStyles,
    colors,
    closeIcon,
    onIconClick,
} ) => {
    const localStyles = {
        container: {
            ...containerStyles,
        },
        text: {
            fontWeight: 300,
            fontSize: 50,
            color: colors.white,
        },
        closeIconContainer: {
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
            paddingRight: 8,
        },
        closeIcon: {
            width: 25,
            height: 25,
            cursor: 'pointer',
            top: 0,
            right: 0,
            marginRight: 8,
            marginTop: 8,
            position: 'absolute',
        },
        adContainer: {
            height: 420,
            width: 230,
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    return (
        <div style={localStyles.container}>
            <img
                style={localStyles.closeIcon}
                onClick={onIconClick}
                alt="close"
                src={closeIcon}
            />
            <div style={localStyles.adContainer}>
                <p>Potential Ad</p>
            </div>
            {/* <AdSense.Google
                client="ca-pub-1193443239031928"
                slot="7806394673"
                responsive="true"
                format="auto"
            /> */}
        </div>
    );
};
