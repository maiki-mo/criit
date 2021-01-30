import React from 'react';

import styles from '../constants/styles';

const { flex, colors } = styles;

export default ( {
    stroke,
    progress,
} ) => {
    const localStyles = {
        container: {
            ...flex.centerFlexCol,
        },
        circle: {
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
        },
    };

    const radius = parseInt( window.innerWidth / 2.3, 10 );
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    if ( !progress ) {
        const strokeDashoffset = circumference - ( 100 / 100 ) * circumference;

        return (
            <div style={localStyles.container}>
                <svg
                    height={radius * 2}
                    width={radius * 2}
                >
                    <circle
                        stroke={colors.darkGrey}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={`${circumference} ${circumference}`}
                        style={{ strokeDashoffset, ...localStyles.circle }}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
            </div>
        );
    }

    const strokeDashoffset = circumference - ( progress / 100 ) * circumference;

    return (
        <div style={localStyles.container}>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke={progress ? colors.white : colors.darkGrey}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset, ...localStyles.circle }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
        </div>
    );
};
