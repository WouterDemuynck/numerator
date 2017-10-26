import React from 'react'
import Icon from '../Icon'

const style = {
    padding: 8,
    margin: 8,
    borderRadius: '50%',
    backgroundColor: '#009688',
    color: 'rgba(255,255,255,1)',
    lineHeight: 0,
}
const disabledStyle = {
    backgroundColor: 'rgba(0,0,0,0.12)',
    color: 'rgba(0,0,0,0.42)',
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
            <Icon type={ props.type } size={ props.size || 20 } />
        </div>
    )
}

export default IconButton
