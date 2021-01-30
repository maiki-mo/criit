const ALL_SOUND = 'all_sound';
const WAKE_LOCK = 'wake_lock';
const COMPLETED_WORKOUTS = 'completed_workouts';
const VIBRATION = 'vibration';

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
    ALL_SOUND,
    WAKE_LOCK,
    VIBRATION,
    COMPLETED_WORKOUTS,
    setVarInStorage,
    clearStorage,
    getVarInStorage,
};
