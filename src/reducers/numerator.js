import { CALCULATION_SUCCESS } from '../actions'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case CALCULATION_SUCCESS:
            return action.payload.state
        default:
            return state
    }
}