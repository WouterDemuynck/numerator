import React from 'react'
import Info from '../Info'

const style = {
    fontFamily: 'Menlo, Monaco, \'Courier New\', monospace',
    fontSize: 12,
    lineHeight: 1.2,
    color: 'rgba(0,0,0,0.87)',
    flex: 1,
    padding: 16,
}
const Console = (props) => {
    const { items } = props
    return (
        <div style={ style }>
            <Info key='head' text='Numerator version 1' />
            <Info key='info1' secondary text='Start adding items to your numerator session.' />
            <Info key='info2' secondary text='Type `clear` to start a new one.' />
            {
                items.map((item) => {
                    return (
                        <div key={ item.id }>
                            <Info text={ item.value } />
                            {
                                React.createElement(selectResultRenderer(item.type), item)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Console


const selectResultRenderer = (type) => {
    switch (type) {

        case 'pending':
            return PendingResult
        case 'calculating':
            return CalculatingResult
        case 'result':
            return CalcuateResult
        case 'none':
            return EmptyResult
        case 'error':
            return ErrorResult
        default: 
            return UnknownResult
    }
}

const CalculatingResult = ({ id, value, data }) => {
    return <Info secondary text='Calculating ...' />
}

const PendingResult = ({ id, value, data }) => {
    return <Info secondary text='Waiting to be calculated ...' />
}

const CalcuateResult = ({ id, value, data }) => {
    return <Info secondary text={ data } />
}

const UnknownResult = ({ id, value, type }) => {
    return <Info secondary text={ `Unkonwn result type '${ type }'` } />
}

const EmptyResult = () => null

const ErrorResult = ({ id, value, data }) => {
    return <Info error text={ `Error: ${ data }` } />
}