import React from 'react';

import ActivityHeader from '../components/ActivityHeader';
import Counter from '../components/Counter';
import Controls from '../components/Controls';

export default ( { containerStyles } ) => {
    const localStyles = {
        container: {
            height: '100%',
            width: '100%',
            ...containerStyles,
        },
    };

    return (
        <main style={localStyles.container}>
            <ActivityHeader />
            <Counter />
            <Controls />
        </main>
    );
};
