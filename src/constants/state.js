import {
    atom,
} from 'recoil';

export default {
    wakeLock: atom( {
        key: 'wake lock',
        default: true,
    } ),
    sound: atom( {
        key: 'sound',
        default: true,
    } ),
};
