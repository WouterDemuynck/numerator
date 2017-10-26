import { ADD_TO_NUMERATOR, calculationPending, calculationStarted, calculationSuccess, calculationFailure } from '../actions'
import numerate from '../api'

const createNumeratorMiddleware = () => {
    let runningTask
    return ({ dispatch, getState }) => (next) => (action) => {

        if (action && action.type === ADD_TO_NUMERATOR) {

            const value = action.payload
            const id = new Date().valueOf().toString()
            const numeratorState = getState().numerator

            dispatch(calculationPending(id, value))

            if (!runningTask) {
                runningTask = Promise.resolve({})
            }

            runningTask = runningTask
                .then((currentState) => {
                    dispatch(calculationStarted(id, value))
                    return numerate(currentState, value)
                        .then(({ state, type, data}) => {
                            dispatch(calculationSuccess(id, state, type, data))
                            return state
                        })
                        .catch((e) => {
                            dispatch(calculationFailure(id, e.message))
                            return currentState
                        })
                })

            return runningTask
        }

        return next(action)
    };
}

export default createNumeratorMiddleware()
