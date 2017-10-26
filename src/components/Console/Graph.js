import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, ERROR_COLOR, BORDER } from '../theme'

const style = {
    color: PRIMARY_TEXT,
    padding: `${ GRID * .75 }px 0`,
    display: 'flex',
    justifyContent: 'space-between',
}
const graphStyle = {
    width: 400,
    height: 400,
    paddingBottom: GRID
}

const Graph = (props) => {
    const { statement, data } = props
    // TODO: Prettier way to render the MathML?

    return (
        <div>
            <div style={ style }>
                <span>{ statement }</span>
            </div>
            <svg style={ graphStyle } viewBox='0 0 24 24'><g><path d={ data } /></g></svg>
        </div>
    )

}

export default Graph
