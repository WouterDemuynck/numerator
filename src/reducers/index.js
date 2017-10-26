import { combineReducers } from 'redux'
import input from './input'
import numerator from './numerator'
import statements from './statements'
import results from './results'

export default combineReducers({
    input,
    numerator,
    statements,
    results,
})
