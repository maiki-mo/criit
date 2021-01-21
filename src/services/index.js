import local from './local';

import config from '../config';

const STORAGE_OPTIONS = {
    local,
};

const { storage } = config;

const __getStorage = () => STORAGE_OPTIONS[storage];

const getSoundOption = () => {
    const storage = __getStorage();
    return storage.getVarInStorage( { key: storage.ALL_SOUND_STORE } );
};

const getWakeLockOption = () => {
    const storage = __getStorage();
    return storage.getVarInStorage( { key: storage.WAKE_LOCK } );
};

const setSoundOption = ( { value } ) => {
    const storage = __getStorage();
    return storage.setVarInStorage( {
        key: storage.ALL_SOUND_STORE,
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

export default {
    getSoundOption,
    setSoundOption,
    getWakeLockOption,
    setWakeLockOption,
};
