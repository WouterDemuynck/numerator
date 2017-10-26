import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/index'
import createStore from './store/createStore'
import reducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers)

const root = document.getElementById('root')
ReactDOM.render(<Provider store={ store }><App /></Provider>, root)

if (module.hot) {
    module.hot.accept('./components/index', () => {
        const UpdatedApp = require('./components/index').default
        ReactDOM.render(<Provider store={ store }><UpdatedApp /></Provider>, root)
    })
    module.hot.accept('./reducers', () => {
        const updatedReducers = require('./reducers').default
        store.replaceReducer(updatedReducers)
    })
}