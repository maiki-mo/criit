import local from './local';

import config from '../config';

const STORAGE_OPTIONS = {
    local,
};

const { storage } = config;

const __getStorage = () => STORAGE_OPTIONS[storage];

const getSoundOption = () => __getStorage().getVarInStorage( { key: storage.ALL_SOUND } );

const getWakeLockOption = () => __getStorage().getVarInStorage( { key: storage.WAKE_LOCK } );

const setSoundOption = ( { value } ) => {
    const storage = __getStorage();
    return storage.setVarInStorage( {
        key: storage.ALL_SOUND,
        value,
    } );
};

const setWakeLockOption = ( { value } ) => {
    const storage = __getStorage();
    return storage.setVarInStorage( {
        key: storage.WAKE_LOCK,
        value,
    } );
};

const setVibrationOption = ( { value } ) => {
    const storage = __getStorage();
    return storage.setVarInStorage( {
        key: storage.VIBRATION,
        value,
    } );
};

const getVibrationOption = () => {
    const storage = __getStorage();
    return storage.getVarInStorage( { key: storage.VIBRATION } );
};

const getCompletedWorkouts = () => {
    const storage = __getStorage();
    return storage.getVarInStorage( { key: storage.COMPLETED_WORKOUTS } );
};

const setCompletedWorkouts = ( { value } ) => {
    const storage = __getStorage();
    return storage.setVarInStorage( {
        key: storage.COMPLETED_WORKOUTS,
        value,
    } );
};

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
