const INCORRECT_ARGS_MSG = 'Incorrect arguments!';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isStraightMode = true) {
        this.isStraightMode = isStraightMode;
    }

    _checkArgs(msg, key) {
        if (!msg || !key) {
            throw new Error(INCORRECT_ARGS_MSG);
        }
    }

    _formatInputData(inputMessage, inputKey) {
        const msg = inputMessage.toUpperCase();

        let key = '';
        let keyCharacterIndex = 0;
        for (let msgCharacterIndex in msg) {
            if (ALPHABET.includes(msg[msgCharacterIndex])) {
                key += inputKey[keyCharacterIndex % inputKey.length].toUpperCase();
                keyCharacterIndex++;
            } else {
                key += msg[msgCharacterIndex];
            }
        }

        return { msg, key };
    }

    encrypt(inputMessage, inputKey) {
        this._checkArgs(inputMessage, inputKey);
        const { msg, key } = this._formatInputData(inputMessage, inputKey);

        let res = '';
        for (let i = 0; i < msg.length; i++) {
            if (ALPHABET.includes(msg[i])) {
                const encryptedCharacterIndex = (ALPHABET.indexOf(msg[i]) + ALPHABET.indexOf(key[i])) % ALPHABET.length;
                res += ALPHABET.charAt(encryptedCharacterIndex);
            } else {
                res += msg[i];
            }
        }

        return this.isStraightMode ? res : res.split('').reverse().join('');
    }

    decrypt(inputEncryptedMessage, inputKey) {
        this._checkArgs(inputEncryptedMessage, inputKey);
        const { msg, key } = this._formatInputData(inputEncryptedMessage, inputKey);

        let res = '';
        for (let i = 0; i < msg.length; i++) {
            if (ALPHABET.includes(msg[i])) {
                const encryptedCharacterIndex =
                    (ALPHABET.length + ALPHABET.indexOf(msg[i]) - ALPHABET.indexOf(key[i])) % ALPHABET.length;
                res += ALPHABET.charAt(encryptedCharacterIndex);
            } else {
                res += msg[i];
            }
        }
        return this.isStraightMode ? res : res.split('').reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine,
};
