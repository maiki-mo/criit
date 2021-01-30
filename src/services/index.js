import local from './local';

import config from '../config';

const STORAGE_OPTIONS = {
    local,
};

const { storage } = config;

const __getStorage = () => STORAGE_OPTIONS[storage];

const getSoundOption = () => __getStorage().getVarInStorage( { key: storage.ALL_SOUND } );

const getWakeLockOption = () => __getStorage().getVarInStorage( { key: storage.WAKE_LOCK } );

const getVibrationOption = () => __getStorage().getVarInStorage( { key: storage.VIBRATION } );

const getCompletedWorkouts = () => __getStorage().getVarInStorage( { key: storage.COMPLETED_WORKOUTS } );

const setSoundOption = ( { value } ) => __getStorage().setVarInStorage( {
    key: storage.ALL_SOUND,
    value,
} );

const setWakeLockOption = ( { value } ) => __getStorage().setVarInStorage( {
    key: storage.WAKE_LOCK,
    value,
} );

const setVibrationOption = ( { value } ) => __getStorage().setVarInStorage( {
    key: storage.VIBRATION,
    value,
} );

const setCompletedWorkouts = ( { value } ) => __getStorage().setVarInStorage( {
    key: storage.COMPLETED_WORKOUTS,
    value,
} );

export default {
    getSoundOption,
    setSoundOption,
    getWakeLockOption,
    setWakeLockOption,
    getCompletedWorkouts,
    setCompletedWorkouts,
    setVibrationOption,
    getVibrationOption,
};
