import React from 'react'
import AppTitle from '../AppTitle'
import Line from './Line'
import ScrollToBottom from '../ScrollToBottom'
import { GRID, MAX_WIDTH, FONT_SIZE, FONT_FAMILY, LINE_HEIGHT, PRIMARY_TEXT } from '../theme'

import Output from '../Output'
import Comment from './Comment'
import Expression from './Expression'
import Processing from './Processing'
import MathML from './MathML'
import Graph from './Graph'

const style = {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    color: PRIMARY_TEXT,
    margin: '0 auto',
    maxWidth: MAX_WIDTH,
    paddingBottom: GRID * 11
}

const Console = (props) => {
    const { items } = props
    return (
        <div style={ style }>
            <AppTitle />
            <Output>
                <ScrollToBottom>
                    <Line key='info1' secondary text='Start adding items to your numerator session.' />
                    <Line key='info2' secondary text='Type `clear` to start a new one.' />
                    <Line key='info3' secondary text={ '\u00A0'} />
                    {
                        items.map((item) => {
                            switch (item.type) {
                                case 'pending':
                                case 'calculating':
                                    return <Processing key={ item.id } statement={ item.value } message={ item.data } />
                                case 'comment':
                                    return <Comment key={ item.id } comment={ item.data } />
                                case 'error':
                                    return <Expression error key={ item.id } statement={ item.value } message={ item.data } />
                                case 'result': // TODO: should be 'expression' instead of result
                                    return <Expression key={ item.id } statement={ item.value } message={ item.data } />
                                case 'mathml':
                                    return <MathML key={ item.id } statement={ item.value } markup={ item.data } />
                                case 'graph':
                                    return <Graph key={ item.id } statement={ item.value } data={ item.data } />
                                case 'none':
                                    return null
                                default:
                                    return <Expression key={ item.id } statement={ item.value } message={ `Unknown rendering: ${ item.type }` } />
                            }
                        })
                    }
                </ScrollToBottom>
            </Output>
        </div>
    )
}

export default Console
