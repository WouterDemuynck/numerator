export const CHANGE_INPUT = 'CHANGE_INPUT'
export const changeInput = (value) => ({ type: CHANGE_INPUT, payload: value })

export const ADD_TO_NUMERATOR = 'ADD_TO_NUMERATOR'
export const addToNumerator = (value) => ({ type: ADD_TO_NUMERATOR, payload: value })

export const CALCULATION_PENDING = 'CALCULATION_PENDING'
export const calculationPending = (id, value) => ({ type: CALCULATION_PENDING, payload: { id, value } })

export const CALCULATION_STARTED = 'CALCULATION_STARTED'
export const calculationStarted = (id) => ({ type: CALCULATION_STARTED, payload: { id } })

export const CALCULATION_SUCCESS = 'CALCULATION_SUCCESS'
export const calculationSuccess = (id, state, type, data) => ({ type: CALCULATION_SUCCESS, payload: { id, state, type, data } })

export const CALCULATION_FAILURE = 'CALCULATION_FAILURE'
export const calculationFailure = (id, message) => ({ type: CALCULATION_FAILURE, payload: { id, message } })
