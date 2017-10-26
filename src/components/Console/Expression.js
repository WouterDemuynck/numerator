import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, ERROR_COLOR } from '../theme'

const style = {
    color: PRIMARY_TEXT,
    fontSize: FONT_SIZE,
    padding: `0 0 ${ GRID }px 0`,
}
const errorStyle = {
    color: ERROR_COLOR,
}
const expressionStyle = {
}
const messageStyle = {
    paddingLeft: GRID * 4,
    color: SECONDARY_TEXT,
    fontSize: FONT_SIZE * 0.85,
}

const Expression = (props) => {
    const { value, error, message } = props

    const computedStyle = {
        ...style,
        ...(error ? errorStyle : undefined)
    }

    return (
        <div style={ computedStyle }>
            <span style={ expressionStyle }>{ value }</span>
            <span style={ messageStyle }>{ message }</span>
        </div>
    )

}

export default Expression
