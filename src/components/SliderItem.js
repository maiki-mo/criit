import React from 'react';
import Slider, { SliderTooltip, Handle } from 'rc-slider';

import styles from '../constants/styles';

const { flex } = styles;

export default ( {
    containerStyles,
    checked,
    onSwitch,
    onColor,
    offColor,
    onHandleColor,
    text,
    textColor,
    offHandleColor,
} ) => {

    const handle = props => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <SliderTooltip
                prefixCls="rc-slider-tooltip"
                overlay={`${value} %`}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </SliderTooltip>
        );
    };

    const localStyles = {
        container: {
            width: '100%',
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'left',
            ...flex.centerFlexRow,
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 20,
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
            <div style={{ width: 200 }}>
                <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
            </div>
            {/* <Switch
                handleDiameter={20}
                offColor={offColor}
                onHandleColor={onHandleColor}
                offHandleColor={offHandleColor}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={onColor}
                checked={checked}
                onChange={onSwitch}
                height={30}
                width={60}
            /> */}
        </div>
    );
};
