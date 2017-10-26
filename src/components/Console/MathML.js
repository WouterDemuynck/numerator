import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, ERROR_COLOR, BORDER } from '../theme'

const style = {
    color: PRIMARY_TEXT,
    padding: `${ GRID * .75 }px 0`,
    display: 'flex',
    justifyContent: 'space-between',
}
const markupStyle = {
    paddingBottom: GRID
}

const MathML = (props) => {
    const { statement, markup } = props
    // TODO: Prettier way to render the MathML?

    return (
        <div>
            <div style={ style }>
                <span>{ statement }</span>
            </div>
            <div style={ markupStyle } dangerouslySetInnerHTML={ { __html: markup } } />
        </div>
    )

}

export default MathML
