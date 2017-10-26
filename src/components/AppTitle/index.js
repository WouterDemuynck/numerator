import React from 'react'
import Icon from '../Icon'
import { FONT_FAMILY, FONT_SIZE, GRID, DOMINANT_COLOR } from '../theme'

const style = {
    color: DOMINANT_COLOR,
    fontSize: FONT_SIZE * 1.75,
    display: 'flex',
    alignItems: 'center',
}

const AppTitle = (props) => {
    return (
        <div style={ style }>
            <Icon type='compass' />
            Numerator
        </div>
    )
}

export default AppTitle
