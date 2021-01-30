import React, { useEffect } from 'react';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    stroke = 4,
    progress = 100,
} ) => {
    useEffect( () => {

    }, [] );

    const localStyles = {
        container: {
            ...flex.centerFlexCol,
            width: '25%',
        },
        circle: {
            transition: 'stroke-dashoffset 0.35s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
        },
    };

    const radius = parseInt( window.innerWidth / 2.6, 10 );
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - ( progress / 100 ) * circumference;

    return (
        <div style={localStyles.container}>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke="red"
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
