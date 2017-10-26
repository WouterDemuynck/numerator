import { CALCULATION_PENDING, CALCULATION_STARTED, CALCULATION_SUCCESS, CALCULATION_FAILURE } from '../actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case CALCULATION_PENDING:
            return [
                ...state,
                action.payload.value,
            ]
        default:
            return state
    }
}
