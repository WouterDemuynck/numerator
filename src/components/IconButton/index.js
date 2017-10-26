import React from 'react'
import Icon from '../Icon'
import { GRID, DOMINANT_COLOR, DISABLED_TEXT } from '../theme'

const style = {
    // margin: GRID,
    borderRadius: '50%',
    // backgroundColor: '#009688',
    // color: 'rgba(255,255,255,1)',
    color: DOMINANT_COLOR,
    lineHeight: 0,
    transition: 'all 0.15s',
}
const disabledStyle = {
    // backgroundColor: 'rgba(0,0,0,0.12)',
    // color: 'rgba(0,0,0,0.42)',
    color: DISABLED_TEXT,
    transform: `scale(0.75)`,
}

const hoverStyle = {

}
const pressedStyle = {

}

const IconButton = (props) => {
    const { disabled, onClick } = props
    const computedStyle = {
        ...style,
        ...(disabled ? disabledStyle : undefined),
    }
    return (
        <div style={ computedStyle } onClick={ disabled ? undefined : onClick }>
            <Icon type={ props.type } />
        </div>
    )
}

export default IconButton
