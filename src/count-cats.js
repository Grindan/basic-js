/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const CAT = '^^';

function countCats(matrix) {
    function countCatsInArray(arr) {
        return arr.reduce((acc, item) => acc + (item === CAT ? 1 : 0), 0);
    }

    return matrix.reduce((acc, arrayItem) => acc + countCatsInArray(arrayItem), 0);
}

module.exports = {
    countCats,
};
