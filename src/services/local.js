const ALL_SOUND_STORE = 'all_sound';
const WAKE_LOCK = 'wake_lock';

const setVarInStorage = ( { key, value } ) => {
    window.localStorage[key] = value;
    return window.localStorage[key];
};

const getVarInStorage = async ( { key } ) => {
    let variable = await window.localStorage[key];

    if ( variable === 'true' ) {
        variable = true;
    } else if ( variable === 'false' ) {
        variable = false;
    }

    return variable;
};

const clearStorage = () => {
    window.localStorage.clear();
};

export default {
    ALL_SOUND_STORE,
    WAKE_LOCK,
    setVarInStorage,
    clearStorage,
    getVarInStorage,
};
