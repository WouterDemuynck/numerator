import React from 'react'
import AppTitle from '../AppTitle'
import Info from './Line'
import ScrollToBottom from '../ScrollToBottom'
import { GRID, MAX_WIDTH, FONT_SIZE, FONT_FAMILY, LINE_HEIGHT, PRIMARY_TEXT } from '../theme'

import Output from '../Output'
import Comment from './Comment'
import Expression from './Expression'
import Processing from './Processing'

const style = {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    color: PRIMARY_TEXT,
    margin: '0 auto',
    maxWidth: MAX_WIDTH,
    paddingBottom: GRID * 10
}

const Console = (props) => {
    const { items } = props
    return (
        <div style={ style }>
            <AppTitle />
            <Output>
                <ScrollToBottom>
                    <Info key='info1' secondary text='Start adding items to your numerator session.' />
                    <Info key='info2' secondary text='Type `clear` to start a new one.' />
                    <Info key='info3' secondary text={ '\u00A0'} />
                    {
                        items.map((item) => {
                            switch (item.type) {
                                case 'pending':
                                case 'calculating':
                                    return <Processing key={ item.id } value={ item.value } message={ item.data } />
                                case 'comment':
                                    return <Comment key={ item.id } value={ item.data } />
                                case 'error':
                                    return <Expression error key={ item.id } value={ item.value } message={ item.data } />
                                case 'result': // TODO: should be 'expression' instead of result
                                    return <Expression key={ item.id } value={ item.value } message={ item.data } />
                            }
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
                </ScrollToBottom>
            </Output>
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
        case 'mathml':
            return MathMLResult
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

const MathMLResult = ({ data }) => {
    // TODO: Prettier way to render the MathML?
    const style = {
        paddingLeft: GRID * 6.5,
        marginBottom: GRID,
        // fontSize: '1.5em'
    }
    return <div style={ style } dangerouslySetInnerHTML={ { __html: data } } />
}