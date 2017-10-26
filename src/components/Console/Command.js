import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, DOMINANT_COLOR } from '../theme'

const style = {
    color: DOMINANT_COLOR,
    fontSize: FONT_SIZE * 0.85,
    padding: `${ GRID * .75 }px 0`,
    fontStyle: 'bold',
}

const Command = (props) => {
    const { message } = props

    return (
        <div style={ style }>
            { message }
        </div>
    )

}

export default Command
