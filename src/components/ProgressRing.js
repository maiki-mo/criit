import React from 'react';

import styles from '../constants/styles';
import numberUtils from '../utils/numbers';

const { percentageToColor } = numberUtils;
const { flex, colors } = styles;

export default ( {
    stroke,
    percentage,
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

    const radius = 180;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    if ( !percentage ) {
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

    const strokeDashoffset = circumference - ( percentage / 100 ) * circumference;

    return (
        <div style={localStyles.container}>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke={percentageToColor( { percentage, colors } )}
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
