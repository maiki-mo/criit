import React from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import styles from '../constants/styles';

const { flex } = styles;

const DEFAULT_MARKS = {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
};

export default ( {
    containerStyles,
    text,
    textColor,
    colors,
    marks,
    step,
    max,
    min,
    defaultValue,
} ) => {
    const handleSliderChange = ( value ) => console.log( value );
    const localStyles = {
        container: {
            width: '100%',
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'left',
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
            paddingTop: 40,
            paddingBottom: 40,
            borderBottom: `1px solid ${textColor}`,
            ...containerStyles,
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: textColor,
        },
    };

    return (
        <div style={localStyles.container}>
            <span style={localStyles.text}>{text}</span>
            <div style={{ width: '50%', paddingRight: '2%' }}>
                <Slider
                    dots
                    min={min || 0}
                    max={max || 60}
                    step={step || 10}
                    defaultValue={defaultValue}
                    marks={marks || DEFAULT_MARKS}
                    onAfterChange={handleSliderChange}
                    trackStyle={[{ backgroundColor: colors.lightBlue }, { backgroundColor: 'green' }]}
                    handleStyle={[{ backgroundColor: colors.blue }, { backgroundColor: colors.white }]}
                    railStyle={{ backgroundColor: colors.white }}
                    dotStyle={{ backgroundColor: colors.blue, borderColor: colors.lightBlue }}
                />
            </div>
        </div>
    );
};
