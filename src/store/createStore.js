import { applyMiddleware, compose, createStore } from 'redux'
import numeratorMiddleware from '../middleware/numerator'

export default (rootReducer) => {

	const isDev = process.env.NODE_ENV !== 'production'
    
	const store = createStore(
		rootReducer,
		undefined,
		compose(
			applyMiddleware(numeratorMiddleware),
			isDev && window.devToolsExtension ? window.devToolsExtension() : (f) => f,
		),
	)

    return store
}
