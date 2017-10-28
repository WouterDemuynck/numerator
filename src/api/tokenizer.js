//import Token from './Token'
import TokenKind from './TokenKind'

class Char {
    static isWhitespace(char) {
        return /\s/.test(char);
    }

    static isDigit(char) {
        return /\d/.test(char);
    }
    
    static isLetter(char) {
        return /[A-Za-z]/.test(char);
    }

    static isOperator(char) {
        return /[\+\-\*\/=^]/.test(char);
    }
}

export default class Tokenizer {
    constructor(expression) {
        this._ignoreWhitespace = true;
        this.expression = expression;
        this.position = 0;
    }

    moveNext() {
        this._lastToken = null;

        let tokenKind = TokenKind.UNDEFINED;
        let tokenValue = '';
        let tokenStart = -1;
        let tokenEnd = -1;

        while (this.position < this.expression.length) {
            let current = this.expression[this.position];
            let currentKind = TokenKind.UNDEFINED;

            if (Char.isDigit(current)) {
                currentKind = TokenKind.LITERAL;
            } else if (Char.isLetter(current)) {
                currentKind = TokenKind.IDENTIFIER;
            } else if (Char.isOperator(current)) {
                currentKind = TokenKind.OPERATOR;
            } else if (Char.isWhitespace(current)) {
                currentKind = TokenKind.WHITESPACE;
            }

            if (tokenStart == -1) {
                tokenStart = this.position;
            }

            tokenKind = tokenKind === TokenKind.UNDEFINED ? currentKind : tokenKind;
            if (tokenKind !== currentKind) {
                tokenEnd = this.position;
            } else if ((this.position + 1) === this.expression.length) {
                tokenEnd = ++this.position;
            }

            if (this.ignoreWhitespace && tokenKind === TokenKind.WHITESPACE) {
                // Skip whitespace token.
                tokenKind = TokenKind.UNDEFINED;
                tokenStart = -1;
                tokenEnd = -1;
                this.position++;
                continue;
            }

            if (tokenEnd > 0) {
                tokenValue = this.expression.substring(tokenStart, tokenEnd);
                console.log(`TOKEN => '${tokenValue}' (${tokenKind}, ${tokenStart}:${tokenEnd})`);
                break;
            }

            this.position++;
        }

        if (tokenValue) {
            this._lastToken = {
                index: tokenStart,
                length: (tokenEnd + 1) - tokenStart,
                value: tokenValue,
                kind: tokenKind
            };

            return true;
        }
        return false;
    }

    get ignoreWhitespace() {
        return this._ignoreWhitespace;
    }

    set ignoreWhitespace(value) {
        this._ignoreWhitespace = value;
    }

    get current() {
        return this._lastToken;
    }
}