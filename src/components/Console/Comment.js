import React from 'react'
import { FONT_SIZE, GRID, PRIMARY_TEXT, SECONDARY_TEXT, COMMENT_COLOR } from '../theme'

const style = {
    color: COMMENT_COLOR,
    fontSize: FONT_SIZE * 0.85,
    padding: `0 0 ${ GRID }px 0`,
    fontStyle: 'italic',
}

const Comment = (props) => {
    const { value } = props

    return (
        <div style={ style }>
            { value }
        </div>
    )

}

export default Comment
