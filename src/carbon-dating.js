const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_TWO = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    }

    const activity = parseInt(sampleActivity);
    const isValidActivity = !isNaN(activity) && activity > 0 && activity < MODERN_ACTIVITY;
    if (!isValidActivity) {
        return false;
    }

    const radioactiveDecay = LOG_TWO / HALF_LIFE_PERIOD;
    const elapsedTime = Math.log(MODERN_ACTIVITY / sampleActivity) / radioactiveDecay;

    return Math.ceil(elapsedTime);
}

module.exports = {
    dateSample,
};
