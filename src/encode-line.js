/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = '';
    let character = str[0];
    let counter = 1;

    for (let i = 1; i <= str.length; i++) {
        const currentCharacter = str[i];
        if (currentCharacter === character) {
            counter++;
        } else {
            result += `${counter > 1 ? counter : ''}${character}`;
            counter = 1;
            character = currentCharacter;
        }
    }

    return result;
}

module.exports = {
    encodeLine,
};
