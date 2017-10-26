import Tokenizer from './tokenizer'

export default class ExpressionParser {
    constructor() {
    }

    parse(expression) {
        let tokenizer = new Tokenizer(expression);

        while (tokenizer.moveNext()) {
            // TODO: Get next token.
        }
    }
}