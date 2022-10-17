/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let maxResult = 0;

    const str = String(n);
    for (let index = 0; index < str.length; index++) {
        const number = Number(str.slice(0, index) + str.slice(index + 1));
        maxResult = Math.max(maxResult, number);
    }

    return maxResult;
}

module.exports = {
    deleteDigit,
};
