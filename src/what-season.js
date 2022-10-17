const NO_DATA_MSG = 'Unable to determine the time of year!';
const INVALID_DATA_MSG = 'Invalid date!';
const MONTH_NAMES = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
];

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return NO_DATA_MSG;
    }

    const isDateValid = date instanceof Date && !date.hasOwnProperty('getMonth') && !date.hasOwnProperty('toString');

    if (!isDateValid) {
        throw new Error(INVALID_DATA_MSG);
    }

    const month = date.getMonth();
    return MONTH_NAMES[month];
}

module.exports = {
    getSeason,
};
