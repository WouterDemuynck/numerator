import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, COMMENT_COLOR } from '../theme'

const style = {
    color: COMMENT_COLOR,
    fontSize: FONT_SIZE * 0.85,
    padding: `${ GRID * .75 }px 0`,
    fontStyle: 'italic',
}

const Comment = (props) => {
    const { comment } = props

    return (
        <div style={ style }>
            { comment }
        </div>
    )

}

export default Comment
