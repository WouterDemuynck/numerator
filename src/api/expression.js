import ExpressionParser from './expressionparser'

export default class Expression {
    constructor(expression) {
        let parser = new ExpressionParser();
        this.tokens = parser.parse(expression);
    }
}