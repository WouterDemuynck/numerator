import React from 'react'
import AppTitle from '../AppTitle'
import Info from '../Info'
import { MAX_WIDTH, FONT_SIZE, FONT_FAMILY, LINE_HEIGHT, PRIMARY_TEXT } from '../theme'

const style = {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    color: PRIMARY_TEXT,
    margin: '0 auto',
    maxWidth: MAX_WIDTH,
}

const Console = (props) => {
    const { items } = props
    return (
        <div style={ style }>
            <AppTitle />
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
        case 'graph':
            return GraphResult
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
    return <Info secondary text='Waiting on previous statement ...' />
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

const GraphResult = ({ data }) => {
    // graph
    const style = {
        width: 400,
        height: 400,
    }
    return <svg style={ style } viewBox='0 0 24 24'><g><path d={ data } /></g></svg>
}