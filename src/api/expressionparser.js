import Tokenizer from './Tokenizer'

export default class ExpressionParser {
    constructor() {
    }

    parse(expression) {
        let tokenizer = new Tokenizer(expression);

        let tokens = [];
        while (tokenizer.moveNext()) {
            tokens.push(tokenizer.current);
        }

        return tokens;
    }
}