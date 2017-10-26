import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, ERROR_COLOR, BORDER } from '../theme'

const style = {
    color: SECONDARY_TEXT,
    fontSize: FONT_SIZE * .85,
    fontStyle: 'italic',
    padding: `${ GRID * .75 }px ${ GRID }px`,
}
const jsonStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    fontSize: FONT_SIZE * .85,
    whiteSpace: 'pre',
    paddingLeft: GRID,
}

const MathML = (props) => {
    const { json, label } = props
    // TODO: Prettier way to render the MathML?

    return (
        <div style={ style }>
            <span>{ label }</span>
            <div style={ jsonStyle }>
                { JSON.stringify(json, null, 2) }
            </div>
        </div>
    )

}

export default MathML
