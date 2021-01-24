import React from 'react';
import Modal from 'react-modal';

import style from '../constants/styles';

const { flex, colors } = style;

Modal.setAppElement( '#root' );

export default ( {
    display,
    children,
    containerStyles,
} ) => {
    const localStyles = {
        container: {
            ...containerStyles,
        },
        dampContainer: {
            display: display ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.7,
            backgroundColor: colors.blue,
        },
    };

    return (
        <div style={localStyles.container}>
            <div style={localStyles.dampContainer} />
            <Modal
                isOpen={display}
                style={{
                    overlay: {
                        backgroundColor: colors.blue,
                        opacity: 0.9,
                    },
                    content: {
                        borderRadius: 0,
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
