//import Token from './Token'
import TokenKind from './TokenKind'

export default class Tokenizer {
    constructor(expression) {
        this.expression = expression;
        this.position = 0;
    }

    moveNext() {
        this._lastToken = null;

        let currentKind = TokenKind.UNDEFINED;
        let currentValue = '';

        while (this.position < this.expression.length) {
            let current = this.expression[this.position];

            if (/[A-Za-z0-9]/g.test(current)) {
                if (currentKind !== TokenKind.IDENTIFIER && currentKind !== TokenKind.UNDEFINED) {
                    break;
                }
                currentValue += current;
                currentKind = TokenKind.IDENTIFIER;
            } else if (/[-\+]|[0-9]|[\.]/g.test(currentValue)) {
                if (currentKind !== TokenKind.LITERAL && currentKind !== TokenKind.UNDEFINED) {
                    break;
                }
                currentValue += current;
                currentKind = TokenKind.LITERAL;
            } else if (/\=|\/|\*/g.test(current)) {
                if (currentKind !== TokenKind.OPERATOR && currentKind !== TokenKind.UNDEFINED) {
                    break;
                }
                currentValue += current;
                currentKind = TokenKind.OPERATOR;
            } else if (current == ' ') {

            }
            
            this.position++;
        }

        if (currentValue) {
            this._lastToken = {
                position: (this.position - currentValue.length),
                value: currentValue,
                kind: currentKind
            };
            return true;
        }
        return false;
    }

    get lastToken() {
        return this._lastToken;
    }
}