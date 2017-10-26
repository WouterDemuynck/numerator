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

        case CALCULATION_STARTED:
            return [
                ...state,
                {
                    type: 'calculating',
                    data: null,
                },
            ]

        case CALCULATION_SUCCESS:
            return [
                ...state.slice(0, state.length - 1),
                {
                    type: action.payload.type,
                    data: action.payload.data,
                },
            ]

        case CALCULATION_FAILURE:
            return [
                ...state.slice(0, state.length - 1),
                {
                    type: 'error',
                    data: action.payload.message,
                },
            ]

        default:
            return state
    }
}
