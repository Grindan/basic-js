const ERROR_MSG = "You can't remove incorrect link!";

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    history: [],

    getLength() {
        return this.history.length;
    },

    addLink(value) {
        this.history.push(`( ${value} )`);
        return chainMaker;
    },

    removeLink(position) {
        if (typeof position !== 'number' || position < 1 || position > this.history.length) {
            this.history = [];
            throw new Error(ERROR_MSG);
        }

        this.history.splice(position - 1, 1);

        return chainMaker;
    },

    reverseChain() {
        this.history.reverse();
        return chainMaker;
    },

    finishChain() {
        const result = this.history.join('~~');
        this.history = [];
        return result;
    },
};

module.exports = {
    chainMaker,
};
