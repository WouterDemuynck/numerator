export default class CommandParser {
    constructor(state, value) {
        this.state = state;
        this.value = value;
    }

    isCommand() {
        return this.value.startsWith('/');
    }

    isComment() {
        return this.value.startsWith('#');
    }

    execute() {
        if (this.isComment()) {
            return {
                state: this.state,
                type: 'comment',
                data: this.value.substring(1)
            }
        }
        if (this.isCommand()) {
            return {
                state: this.state,
                type: 'command',
                data: {
                    name: this.value.substring(1),
                    args: [],
                }
            }
        }
    }
}