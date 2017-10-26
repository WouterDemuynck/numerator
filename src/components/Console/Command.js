import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, DOMINANT_COLOR } from '../theme'

const style = {
    color: PRIMARY_TEXT,
    fontSize: FONT_SIZE,
    padding: `${ GRID * .75 }px 0`,
    display: 'flex',
    justifyContent: 'space-between',
}
const commandStyle = {
    color: DOMINANT_COLOR,
    fontSize: FONT_SIZE * 0.85,
    padding: `${ GRID * .75 }px 0`,
    fontStyle: 'bold',
}
const messageStyle = {
    paddingLeft: GRID * 4,
    color: DOMINANT_COLOR,
    fontSize: FONT_SIZE * 0.85,
}

const Command = (props) => {
    const { statement, message } = props

    return (
        <div style={ style }>
            <span style={ commandStyle }>{ statement }</span>
            <span style={ messageStyle }>{ message }</span>
        </div>
    )

}

export default Command
