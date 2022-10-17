/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }

        const maxDepthItem = arr.reduce((acc, item) => Math.max(acc, this.calculateDepth(item)), 0);
        return 1 + maxDepthItem;
    }
}

module.exports = {
    DepthCalculator,
};
