const numerate = (state, value) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiResult = fakeApi(state, value)

            if (apiResult.error) {
                reject({ message: apiResult.error })
            } else {
                resolve({
                    state: apiResult.state,
                    type: 'result',
                    data: apiResult.data,
                })
            }
        }, 100)
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
            data: 'z set to ' + (state.x + state.y),
        }
    }

    if (state.hasOwnProperty(value)) {
        return {
            state,
            data: `${ value } is ${ state[value] }`,
        }
    }

    return {
        state,
        error: 'Unknown operation',
    }
}