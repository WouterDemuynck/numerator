import { UNDO, CLEAR_SESSION, CALCULATION_PENDING, CALCULATION_STARTED, CALCULATION_SUCCESS, CALCULATION_FAILURE } from '../actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

        case UNDO:
            return [
                ...state.slice(0, state.length - 2),
            ]

        case CLEAR_SESSION:
            return initialState

        case CALCULATION_PENDING:
            return [
                ...state,
                action.payload.value,
            ]

        default:
            return state
    }
}
