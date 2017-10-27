import ExpressionParser from './ExpressionParser'

export default class Expression {
    constructor(expression) {
        let parser = new ExpressionParser();
        this.tokens = parser.parse(expression);
    }

    toJSON() {
        return JSON.stringify(this.tokens);
    }
}