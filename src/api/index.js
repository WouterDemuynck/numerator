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
        }, 10)
    })
}

export default numerate


const fakeApi = (state, value) => {

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

    if (value === 'plot') {
        return {
            state,
            type: 'graph',
            data: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
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