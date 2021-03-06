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
    vibration: atom( {
        key: 'vibration',
        default: services.getVibrationOption() || true,
    } ),
    maxReps: atom( {
        key: 'max reps',
        default: 8,
    } ),
    activitySeconds: atom( {
        key: 'activity seconds',
        default: 20,
    } ),
    cooldownSeconds: atom( {
        key: 'cooldown seconds',
        default: 10,
    } ),
    completedWorkouts: atom( {
        key: 'completed workouts',
        default: services.getCompletedWorkouts() || [],
    } ),
};
