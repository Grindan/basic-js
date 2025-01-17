/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let counter = 0;
    const s2Array = s2.split('');

    for (let character of s1) {
        const indexInS2 = s2Array.indexOf(character);
        if (indexInS2 > -1) {
            s2Array.splice(indexInS2, 1);
            counter++;
        }
    }

    return counter;
}

module.exports = {
    getCommonCharacterCount,
};
