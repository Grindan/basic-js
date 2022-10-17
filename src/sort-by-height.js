/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const minusIndexes = [];
    const elements = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            minusIndexes.push(i);
        } else {
            elements.push(arr[i]);
        }
    }

    elements.sort((a, b) => a - b);
    minusIndexes.forEach((ind) => elements.splice(ind, 0, -1));

    return elements;
}

module.exports = {
    sortByHeight,
};
