import React from 'react'
import { FONT_FAMILY, FONT_SIZE, GRID, DOMINANT_COLOR } from '../theme'

const style = {
    color: DOMINANT_COLOR,
    fontSize: FONT_SIZE * 1.75,
    padding: `0 ${ GRID * 6 }px ${ GRID }px ${ GRID * 6 }px`,
}

const AppTitle = (props) => {
    return <div style={ style }>Numerator</div>
}

export default AppTitle
