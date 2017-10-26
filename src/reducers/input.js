import { CALCULATION_PENDING, CHANGE_INPUT } from '../actions'

const initialState = {
    value: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                value: action.payload,
            }
        case CALCULATION_PENDING:
            return {
                ...state,
                value: '',
            }
        default:
            return state
    }
}
