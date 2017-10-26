import { ADD_TO_NUMERATOR, calculationPending, calculationStarted, calculationSuccess, calculationFailure } from '../actions'
import numerate from '../api'


const createTask = (config) => {

    let nextTask
    let { dispatch, value, getState } = config 
    return {
        start: () => {

        },
        next: (task) => {
            nextTask = task
        },
        cancel: () => {
            // Cancel dispatching, that is all.
            dispatch = () => { /* cancel the dispatch */ }
        }
    }
}

const createQueue = (dispatch, getState) => {
    let cancelled = false
    let tasks = []
    let promise = Promise.resolve()

    const runNextTask = () => {
        if (tasks.length) {
            tasks[0]()
        }
    }

    const createQueueEntry = () => {
        return (value) => {
            dispatch(calculationPending('', value))
    
            tasks.push(() => {
                dispatch(calculationStarted('', value))
                numerate(getState(), value)
                    .then(({ state, type, data}) => {
                        if (!cancelled) {
                            dispatch(calculationSuccess('', state, type, data))
                        }
                    })
                    .catch((e) => {
                        if (!cancelled) {
                            dispatch(calculationFailure('', e.message))
                        }
                    })
                    .then(() => {
                        // remove the current item
                        tasks = [
                            ...tasks.slice(1),
                        ]
                        runNextTask()
                    })
            })

            if (tasks.length === 1) {
                runNextTask()
            }
            
            return createQueueEntry(dispatch, getState)
        }
    }

    const queue = createQueueEntry()

    queue.cancel = () => {
        cancelled = true
    }

    return queue
}

const createNumeratorMiddleware = () => {
    let runningTask


    return ({ dispatch, getState }) => {

        const getNumertorState = () => getState().numerator
        let queue = createQueue(dispatch, getNumertorState)
    
        return (next) => (action) => {

            if (action && action.type === ADD_TO_NUMERATOR) {
                queue = queue(action.payload)
                return
            }

            return next(action)
        }
    }
}

export default createNumeratorMiddleware()
