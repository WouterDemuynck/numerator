import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, ERROR_COLOR } from '../theme'

const style = {
    fontSize: FONT_SIZE * 0.85,
    padding: `${ GRID * .75 }px 0`,
}
const expressionStyle = {
    color: PRIMARY_TEXT,
}
const messageStyle = {
    color: SECONDARY_TEXT,
}

const Processing = (props) => {
    const { statement, message } = props

    return (
        <div style={ style }>
            <span style={ expressionStyle }>{ statement }</span>
            <span style={ messageStyle }>{ message }</span>
        </div>
    )

}

export default Processing
