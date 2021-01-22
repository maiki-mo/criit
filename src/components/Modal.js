import React from 'react';
import Modal from 'react-modal';

import style from '../constants/styles';

const { flex, colors } = style;

export default ( {
    display,
    children,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            ...containerStyles,
        },
    };

    return (
        <div style={localStyles.container}>
            <Modal
                isOpen={display}
                style={{
                    overlay: {
                        backgroundColor: colors.blue,
                        opacity: 0.9,
                    },
                    content: {
                        backgroundColor: colors.blue,
                        border: `1px solid ${colors.white}`,
                        color: colors.lightBlue,
                        ...flex.centerFlexCol,
                    },
                }}
            >
                {children}
            </Modal>
        </div>
    );
};
