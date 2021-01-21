import {
    atom,
} from 'recoil';
import services from '../services';

export default {
    wakeLock: atom( {
        key: 'wake lock',
        default: services.getWakeLockOption() || true,
    } ),
    sound: atom( {
        key: 'sound',
        default: services.getSoundOption() || true,
    } ),
};
