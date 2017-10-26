import { CLEAR_SESSION, CALCULATION_SUCCESS } from '../actions'

const initialState = {}

// TODO: how to handle undo here?

export default (state = initialState, action) => {
    switch (action.type) {

        case CLEAR_SESSION:
            return initialState

        case CALCULATION_SUCCESS:
            return action.payload.state

        default:
            return state

    }
}