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
    maxReps: atom( {
        key: 'max reps',
        default: 8,
    } ),
    activitySeconds: atom( {
        key: 'activity seconds',
        default: 20,
    } ),
    restSeconds: atom( {
        key: 'rest seconds',
        default: 10,
    } ),
};
