import CommandParser from './commandparser'
import Expression from './expression'

const numerate = (state, value) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiResult = fakeApi(state, value)

            if (apiResult.error) {
                reject({ message: apiResult.error })
            } else {
                resolve({
                    state: apiResult.state,
                    type: apiResult.type,
                    data: apiResult.data,
                })
            }
        }, 1)
    })
}

export default numerate


const fakeApi = (state, value) => {

    let parser = new CommandParser(state, value);
    if (parser.isCommand()) {

        return parser.execute();

    } else if (parser.isComment()) {

        // Returns an object with type 'comment'.
        return parser.execute();

    } else {
        // Parse the entered value as an expression.
        let expression = new Expression(value);
    }


    if (value.indexOf('x =') === 0) {
        value = parseFloat(value.substr(3).trim())
        return {
            state: {
                ...state,
                x: value,
            },
            type: 'result',
            data: 'x set to ' + value
        }
    }
    if (value.indexOf('y =') === 0) {
        value = parseFloat(value.substr(3).trim())
        return {
            state: {
                ...state,
                y: value,
            },
            type: 'result',
            data: 'y set to ' + value
        }
    }

    if (value.indexOf('x + y') === 0) {
        if (state.x === undefined && state.y === undefined) {
            return {
                state,
                error: 'x and y not defined'
            }
        }
        if (state.x === undefined) {
            return {
                state,
                error: 'x not defined'
            }
        }
        if (state.y === undefined) {
            return {
                state,
                error: 'y not defined'
            }
        }
        return {
            state,
            type: 'result',
            data: 'x + y = ' + (state.x + state.y),
        }
    }

    if (value.indexOf('z = x + y') === 0) {
        if (state.x === undefined && state.y === undefined) {
            return {
                state,
                error: 'x and y not defined'
            }
        }
        if (state.x === undefined) {
            return {
                state,
                error: 'x not defined'
            }
        }
        if (state.y === undefined) {
            return {
                state,
                error: 'y not defined'
            }
        }
        return {
            state: {
                ...state,
                z: state.x + state.y,
            },
            type: 'result',
            data: 'z set to ' + (state.x + state.y),
        }
    }

    if (value === 'pi') {
        return {
            state,
            type: 'mathml',
            data: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&pi;</mi></math>'
        }
    }

    if (value === 'plot') {
        return {
            state,
            type: 'graph',
            data: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
        }
    }

    if (value === 'pythagoras') {
        return {
            state,
            type: 'mathml',
            data: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi>&nbsp; a </mi><mn>2</mn></msup><mo> + </mo><msup><mi> b </mi><mn>2</mn></msup><mo> = </mo><msup><mi> c </mi><mn>2</mn></msup></mrow></math>',
        }
    }

    if (value === 'matrix') {
        return {
            state,
            type: 'mathml',
            data: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfenced open="(" close=")"><mtable><mtr><mtd><mi>1</mi></mtd><mtd><mi>5</mi></mtd><mtd><mi>3</mi></mtd></mtr><mtr><mtd><mi>8</mi></mtd><mtd><mi>2</mi></mtd><mtd><mi>6</mi></mtd></mtr><mtr><mtd><mi>7</mi></mtd><mtd><mi>9</mi></mtd><mtd><mi>0</mi></mtd></mtr></mtable></mfenced></mrow></math>'
        }
    }

    if (state.hasOwnProperty(value)) {
        return {
            state,
            type: 'result',
            data: `${ value } is ${ state[value] }`,
        }
    }

    return {
        state,
        error: 'Unknown operation',
    }
}